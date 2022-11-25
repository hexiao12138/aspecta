// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import qs from 'qs';
type Data = {
  name: string
}
interface CandidatesReq {
  skill_names: string[];
  candidates: {
    identifier: string;
    accounts: {
      github: string;
      stackoverflow: string;
      linkedin: string;
      academic: string;
    }
  }[]
}
export const getCandidates = (data: CandidatesReq) => {
  fetch('/api/assess_candidates', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return new Promise((resolve) => {
    resolve(resData)
  })
}
export const resData = {
  candidates: [
      {
          "identifier": "",
          "overall_score": 88.0,
          "skills": [
              {
                  "name": "computer vision",
                  "score": 86.43,
                  "average": 76.44,
                  "sources": [
                      "academic"
                  ]
              },
              {
                  "name": "deep learning",
                  "score": 88.0,
                  "average": 77.34,
                  "sources": [
                      "academic",
                      "github"
                  ]
              },
              {
                  "name": "natural language processing",
                  "score": 88.39,
                  "average": 78.99,
                  "sources": [
                      "academic",
                      "github"
                  ]
              },
              {
                  "name": "neural network",
                  "score": 84.75,
                  "average": 76.41,
                  "sources": [
                      "academic",
                      "github"
                  ]
              },
              {
                  "name": "time series",
                  "score": 84.0,
                  "average": 79.05,
                  "sources": [
                      "academic"
                  ]
              },
              {
                  "name": "reinforcement learning",
                  "score": 91.84,
                  "average": 77.83,
                  "sources": [
                      "academic"
                  ]
              },
              {
                  "name": "adversarial robustness",
                  "score": 80.43,
                  "average": 78.36,
                  "sources": [
                      "academic"
                  ]
              },
              {
                  "name": "data mining",
                  "score": 100.0,
                  "average": 76.47,
                  "sources": [
                      "academic"
                  ]
              },
              {
                  "name": "graph learning",
                  "score": 100.0,
                  "average": 79.45,
                  "sources": [
                      "academic"
                  ]
              }
          ],
          "info": {
              "name": "Carl Yang",
              "contact": null,
              "education_background": "University of Illinois at Urbana-Champaign",
              "education_major": "Computer Science",
              "education_degree": "Ph.D.",
              "experience_level": "Expert",
              "open_to_new_opportunity": null,
              "current_employer": "Emory University",
              "location": "Atlanta, Georgia, US",
              "occupation": "Assistant Professor",
              "profile_picture": "https://s3.us-west-000.backblazeb2.com/proxycurl/person/carlyang81/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20220428%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20220428T140613Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=01391c6b25fae1afc87aaf9c9107e842f2d84a2f45afb342eabb30c49a932def",
              "url": "https://github.com/yangji9181"
          },
          "accounts": {
              "github": "yangji9181",
              "academic": "2524788031",
              "stackoverflow": "",
              "linkedin": "carlyang81"
          },
          "badges": []
      }
  ],
  "count": 1,
  "skill_set": {
      "deep learning": [
          "natural language processing",
          "neural network",
          "computer vision",
          "reinforcement learning",
          "data mining",
          "robotics",
          "attention mechanism",
          "graph learning",
          "adversarial robustness",
          "self-supervised learning",
          "unsupervised learning",
          "generative adversarial network",
          "time series"
      ]
  },
  "remaining_quota": {
      "search": 0,
      "assessment": 98,
      "highlight": 100,
      "retrieval": 1000,
      "hc_search": 0,
      "hc_assessment": 49,
      "hc_highlight": 50,
      "hc_retrieval": 1000
  }
}
