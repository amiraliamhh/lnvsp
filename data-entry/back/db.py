def get_database():
  from pymongo import MongoClient

  CONNECTION_STRING = "mongodb://127.0.0.1:27017"

  client = MongoClient(CONNECTION_STRING)

  return client['lnvsp']

def get_data_collection():
  db = get_database()

  collection = db['data']

  return collection
