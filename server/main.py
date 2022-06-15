import uvicorn
import json
import requests
from fastapi import FastAPI
from requests_oauthlib import OAuth1
from fastapi.middleware.cors import CORSMiddleware
from decouple import config

auth = OAuth1(config('OAUTH_LOGIN'), config('OAUTH_PASSWORD'))
app = FastAPI()

origins = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

endpoint = "http://api.thenounproject.com/icons"
limit = '?limit_to_public_domain=1&limit=20'
google_endpoint = 'https://www.googleapis.com/webfonts/v1/webfonts?sort='
google_key = config('GOOGLE_KEY')
secret_hash = config('SECRET_HASH')


@app.get("/icon/{tag}")
def get_icons(tag, hash):
    if hash == secret_hash:
        new_endpoint = f'{endpoint}/{tag}{limit}'
        icons = json.loads(requests.get(new_endpoint, auth=auth).content.decode('utf-8'))['icons']
        icons_list = list(map(lambda icon: icon['icon_url'], icons))
        return icons_list
    else:
        return []


@app.get('/fonts/{query}')
def get_fonts(query, hash):
    if hash == secret_hash:
        new_endpoint = f'{google_endpoint}{query}{google_key}'
        data = json.loads(requests.get(new_endpoint).content)['items']
        return data
    else:
        return {}


@app.get("/")
async def root(hash):
    if hash == secret_hash:
        return {"url": json.loads(requests.get(endpoint, auth=auth).content.decode('utf-8'))['icon']['icon_url']}
    else:
        return {}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8443)
