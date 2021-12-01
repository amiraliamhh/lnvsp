from bson.objectid import ObjectId
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from db import get_data_collection

class DataEntry(BaseModel):
  is_vs: bool
  content: str

app = FastAPI()

origins = ["*"]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.post("/api/v1/entry")
async def data_entry(data: DataEntry):
  collection = get_data_collection()
  document = collection.insert_one({
    "is_vs": data.is_vs,
    "content": data.content
  })
  return {
    "id": str(document.inserted_id)
  }
