import re
import sqlite3
import shutil  
import os.path

conn = sqlite3.connect('FacebookPlus.db')
curs = conn.cursor()

fname = ""
lname = ""
fullName = ""
numFriends = ""
mutFriends = ""

def add_info(fname, lname, numFriends, mutFriends):
    curs.execute("INSERT INTO Friend (FName, LName, FullName, NumFriend, MutFriend) VALUES (?, ?, ?, ?, ?)",
          (fname, lname, fullName, numFriends, mutFriends))
    conn.commit()
def del_table():
    curs.execute("DROP TABLE Friend")
    conn.commit()
def close_table():
    curs.close()
    conn.close()

def num_there(s):
    return any(i.isdigit() for i in s)


fd = open('rawFriendList.txt', encoding="utf8")
contents = fd.readlines()
print(contents)
fd.close()

rawFile = []
strippedFile = []
# Get rid of empty lines
for line in contents:
    # Strip whitespace, should leave nothing if empty line was just "\n"
    if not line.strip():
        continue
    # We got something, save it
    else:
        rawFile.append(line)

myName = rawFile[1]
# Determine the friend number of the user
myFriendNum = re.sub('[^0-9]','', rawFile[14])
# Determine the friend request number of the user
myFriendRequestNum = re.sub('[^0-9]','', rawFile[19])
# The first 25 lines are just not needed so we start where we start
for line in rawFile[25:]:
    # Strip the lines of any \n 
    line = line.replace('\n','')
    # Once we get to the end of the friends we break
    if line == "More About You":
        break
    elif line != 'Friends' and line != 'friend' and line!= 'Friend' and line!='friends':
        strippedFile.append(line)

indx = 0
for line in strippedFile:
    fname = ""
    lname = ""
    fullName = ""
    numFriends = ""
    mutFriends = ""
    if not num_there(line) and num_there(strippedFile[indx+1]):
        splitLine = line.split()
        fullName = line
        fname = splitLine[0]
        lname = splitLine[1:]
        lname = ' '.join(lname)
        if "mutual" in strippedFile[indx+1]:
            mutFriends  = strippedFile[indx+1].strip(' mutual friends')
        else:
            numFriends = strippedFile[indx+1].strip(' friends')
        print("Fname: " + fname)
        print("Lname: " + lname)
        print("Full Name: " + fullName)
        print("NumFriends: " + numFriends)
        print("MutFriends: " + mutFriends)
        add_info(fname, lname, numFriends, mutFriends)
    indx+=1

