# The Goal

There are 2 dockerized services In this repo.

1. Exchange service which knows about the bidder endpoint.

2. Final bidder service

This service is listening for exchange service, to place a bid.
1. It Check for matching on geo, and bcat properties, and bids with 0.1 amount and ad url, if there is a match  
2. It bids with 0 amount by if blocked category found in blockedCategories array, or there are no match with geo and bcat properties.

There are pre-configured service with 2 campaigns
to get campaigns, register or delete them, use /campaigns endpoint, with GET, POST and DELETE endpoint

# Instructions

To start the project run `docker compose up --build`

Get Campaigns

url /campaigns
method: GET
body: none

Create Campaigns

url /campaigns
method: POST
body: [
  {
    [
      {
        "id": "campaign-id-123",
        "name": "Summer Sale",
        "targeting": {
          "geo": {
            "country": "US",
            "region": "CA"
          },
          "bcat": ["IAB2-1", "IAB2-3"]
        }
      },
      {
        "id": "campaign-id-456",
        "name": "Winter Promotion",
        "targeting": {
          "geo": {
            "country": "US",
            "region": "NY"
          },
          "bcat": ["IAB7-12", "IAB7-25"]
        }
      }
    ]
  }
]

Delete Campaigns

url /campaigns
method: DELETE
body: [
  "campaign-id-123",
  "campaign-id-456"
]

