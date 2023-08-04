# The Goal

There are 2 dockerized services in this repo.

1. An exchange service that knows about the bidder's endpoint.

2. Final bidder service

This service listens on the exchange service to place a bid.
1. Checks for matches by geolocation, category properties, and bids with a sum of 0.1 and ad URL if there is a match.
2. It bids zero and with null value in ad property, if the blocked category is found in the blocked categories array, or if there is no match for the geolocation and category.

There are 2 pre-configured campaigns
to get campaigns, register or delete them, use the /campaigns endpoint with a GET, POST and DELETE endpoint

# Instructions

To run the project, run `docker compose up --build`

Get Campaigns

url: /campaigns
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

