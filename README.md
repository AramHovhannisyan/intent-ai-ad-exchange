# About project

There are 2 dockerized services in this repo.

1. An exchange service that knows about the bidder's endpoint.

2. Final bidder service

This service listens to the exchange service to place a bid on `http://localhost:3000` port.
1. Checks for matches by geo-location, category properties, and bids with a sum of 0.1 and simple ad, if there is a match.
2. It bids zero amount and null value in the ad property, if the blocked category is found in the blocked categories array, or if there is no match for the geo-location and category.

There are 2 pre-configured campaigns with sample data.

# Instructions

To start the project, run `docker compose up --build`

To get, register or delete campaigns, use the /campaigns endpoint with a GET, POST and DELETE methods.

# Examples

Get Campaigns

url: `http://localhost:3000/campaigns`
method: GET
body: none

Create Campaigns

url: `http://localhost:3000/campaigns`

method: POST

body: 
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

Delete Campaigns

url: `http://localhost:3000/campaigns`
method: DELETE
body: [
  "campaign-id-123",
  "campaign-id-456"
]

