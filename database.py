```python
# Import necessary libraries
import sqlite3
from sqlite3 import Error

class Database:
    def __init__(self):
        self.conn = self.create_connection()

    def create_connection(self):
        conn = None;
        try:
            conn = sqlite3.connect(':memory:') # creates a database in RAM
            print(sqlite3.version)
        except Error as e:
            print(e)
        return conn

    def create_table(self):
        try:
            self.conn.execute('''
                CREATE TABLE users
                (ID INT PRIMARY KEY NOT NULL,
                NAME TEXT NOT NULL,
                PREFERENCES BLOB NOT NULL);
                ''')
            print("Table created successfully")
        except Error as e:
            print(e)

    def insert(self, data):
        try:
            self.conn.execute("INSERT INTO users (ID,NAME,PREFERENCES) \
                  VALUES (?, ?, ?)", (data['id'], data['name'], data['preferences']));
            self.conn.commit()
            print("Record created successfully")
            return {'status': 'success'}
        except Error as e:
            print(e)
            return {'status': 'fail'}

    def get_all(self):
        cursor = self.conn.execute("SELECT id, name, preferences from users")
        data = []
        for row in cursor:
            data.append({'id': row[0], 'name': row[1], 'preferences': row[2]})
        return data
```
