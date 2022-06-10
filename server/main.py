import uvicorn
from fastapi import FastAPI
import requests
from requests_oauthlib import OAuth1
import json


auth = OAuth1("ca708d161e0f4246bea7db999bbf7888", "8c95080030194631b801dcad03dfa080")
app = FastAPI()

# endpoint = "http://api.thenounproject.com/icons/fish?limit_to_public_domain=1&limit=4"
endpoint = "http://api.thenounproject.com/icons"
limit = '?limit_to_public_domain=1&limit=20'


# dupa = list(map(lambda icon: icon['icon_url'], dupa))
# print(dupa)



@app.get("/icon/{tag}")
def get_icons(tag):
    new_endpoint = f'{endpoint}/{tag}{limit}'
    dupa = json.loads(requests.get(new_endpoint, auth=auth).content.decode('utf-8'))['icons']
    dupa = list(map(lambda icon: icon['icon_url'], dupa))
    print(dupa)
    return dupa






@app.get("/")
async def root():
    return {"url": json.loads(requests.get(endpoint, auth=auth).content.decode('utf-8'))['icon']['icon_url']}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8443)
