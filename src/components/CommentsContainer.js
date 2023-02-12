import React, { useDebugValue, useEffect, useState } from "react";
import Youtube_API from "../Utils/contants";

// const CommentData = [
//   {
//     name: "saurabh",
//     id: "3232",
//     text: "saurabh maurya fnt end devleper",
//     replies: [],
//   },
//   {
//     name: "saurabh",
//     id: "323e2",
//     text: "saurabh maurya fnt end devleper",
//     replies: [
//       {
//         name: "maurya",
//         id: "32352",
//         text: "saurabh maurya fnt end devleper",
//         replies: [
//           {
//             name: "rahul",
//             id: "325332",
//             text: "saurabh maurya fnt end devleper",
//             replies: [
//               {
//                 name: "ram",
//                 id: "3t232",
//                 text: "saurabh maurya fnt end devleper",
//                 replies: [],
//               },
//             ],
//           },
//           {
//             name: "maurya",
//             id: "323r52",
//             text: "saurabh maurya fnt end devleper",
//           },
//         ],
//       },
//       {
//         name: "kumar",
//         id: "32es32",
//         text: "saurabh maurya fnt end devleper",
//         replies: [],
//       },
//     ],
//   },
//   {
//     name: "rahul",
//     id: "32az32",
//     text: "saurabh maurya fnt end devleper",
//     replies: [],
//   },
//   {
//     name: "ram",
//     id: "32ase32",
//     text: "saurabh maurya fnt end devleper",
//     replies: [],
//   },
//   {
//     name: "rohit",
//     id: "323tr2",
//     text: "saurabh maurya fnt end devleper",
//     replies: [],
//   },
// ];

const CommentData = [
  {
    kind: "youtube#commentThread",
    etag: "VO59rN6XU9p8QFDnE65RqgAEpFk",
    id: "Ugy5vGRkhbtcs3QpQGN4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "5Nl9t-miazg",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "URm670PD_t7WYPUFdnizuz0zchE",
        id: "Ugy5vGRkhbtcs3QpQGN4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "5Nl9t-miazg",
          textDisplay:
            "हर किसी के लिए प्यार और दिल! ❤<br>Kærlighed og hjerter til alle! 😍<br>L&#39;amour et le cœur pour tout le monde ! <br>الحب و القلوب للجميع! 💗<br>Liebe und Herzen für alle! 💝<br>Любов і серця до всіх! 💛<br>모든 사람에게 사랑과 마음을! 💖",
          textOriginal:
            "हर किसी के लिए प्यार और दिल! ❤\nKærlighed og hjerter til alle! 😍\nL'amour et le cœur pour tout le monde ! \nالحب و القلوب للجميع! 💗\nLiebe und Herzen für alle! 💝\nЛюбов і серця до всіх! 💛\n모든 사람에게 사랑과 마음을! 💖",
          authorDisplayName: "Grandiloquence - Language Learning",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/u5s_l9ifhmZ51ZNVZiXmjhD6NJOf5jSBz9KYCjH5JUWKav2j4he7D-SrH58Pj5g6bMnr7f9lPfE=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC0IMx3AynQi1nZw_g4mhIxg",
          authorChannelId: {
            value: "UC0IMx3AynQi1nZw_g4mhIxg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-12T14:30:16Z",
          updatedAt: "2023-02-12T14:30:16Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "Lzz2xsUzVwyMDQ0MMdH6BFRaJCk",
    id: "UgxYPs65WAfhkbSS8rp4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "KC3iHks7wFs",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "xwoDGXOif8hKNxSnW4Da8fJINpU",
        id: "UgxYPs65WAfhkbSS8rp4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "KC3iHks7wFs",
          textDisplay:
            "Thank you for this video and your edx course. I’m wondering if you will be creating a series on using NLP for document processing? I’m interested in using tensorflow js in the browser to upload a document and have metadata extract from its contents. Thanks!",
          textOriginal:
            "Thank you for this video and your edx course. I’m wondering if you will be creating a series on using NLP for document processing? I’m interested in using tensorflow js in the browser to upload a document and have metadata extract from its contents. Thanks!",
          authorDisplayName: "dc3it learn",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AL5GRJUzBOLFv3axwdaZWowhEA6wLAIXpQ82VarnupHp=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCHqV1W-V5tVXhJt-4Y9k63Q",
          authorChannelId: {
            value: "UCHqV1W-V5tVXhJt-4Y9k63Q",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-12T14:14:54Z",
          updatedAt: "2023-02-12T14:14:54Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "oyMtfUTEBm031X5_KhLjwRywXgc",
    id: "Ugz_Y_a4iSRXm-7HhiN4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "NqStYoLV85Y",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "H61mgvVmtOkaUdUIXW6lddSXC-g",
        id: "Ugz_Y_a4iSRXm-7HhiN4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "NqStYoLV85Y",
          textDisplay:
            '<a href="https://www.youtube.com/watch?v=NqStYoLV85Y&amp;t=0m07s">0:07</a> 😊 Google Team!! 🎉',
          textOriginal: "0:07 😊 Google Team!! 🎉",
          authorDisplayName: "Jay MCCNMD",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/SErws46Hnv0CnLtohz4rsq0zoqSGy6DUeUsXLPwdlNW1GZ8bIQ3NRV96EJkr-kHin_TMOVIDjw=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC52lgHiatJaiQaM-9_BW0Sw",
          authorChannelId: {
            value: "UC52lgHiatJaiQaM-9_BW0Sw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-12T03:01:33Z",
          updatedAt: "2023-02-12T03:01:33Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "J-0U0y5MkOI4pEozANGd0ABuWIo",
    id: "Ugw5YER3ONP0S3Ginfh4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "TF1yh5PKaqI",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "AiU9Ade-G0XtmxduNi5Zpw17JtE",
        id: "Ugw5YER3ONP0S3Ginfh4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "TF1yh5PKaqI",
          textDisplay: "is weka still in use?",
          textOriginal: "is weka still in use?",
          authorDisplayName: "Java Developer",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/bbNTl5y4ag_BsvQMFp_Ge49kIKRT0KKp5mH-IyImsDKRy4OPmBjzLSD3zuDPOnfoi363RtFNGA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCSKNnimJc0xLgxHMoob07lg",
          authorChannelId: {
            value: "UCSKNnimJc0xLgxHMoob07lg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-12T02:34:46Z",
          updatedAt: "2023-02-12T02:34:46Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "CHWn1cqzeSw1JMQ3Q-U7Lpk2Hx8",
    id: "UgxwuMIcmNgMOGuqcxt4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "NqStYoLV85Y",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "EPLCZGgPi7j-a4hFvATYxep5JDw",
        id: "UgxwuMIcmNgMOGuqcxt4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "NqStYoLV85Y",
          textDisplay: "Support a Emergency A AA",
          textOriginal: "Support a Emergency A AA",
          authorDisplayName: "om Yadav",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/JwjS-NXmC3Va-JL4ur1PfndUBZlb3aKBXBJCGBNj_vCvZcAqC6UUShxZmNy8U7dKVfz2WqFQtg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC-CZaxx1tGTy4aL4M4P4YbA",
          authorChannelId: {
            value: "UC-CZaxx1tGTy4aL4M4P4YbA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-12T00:50:57Z",
          updatedAt: "2023-02-12T00:50:57Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "55KdOTfqrcDZqm_OFJiXo98kDq8",
    id: "UgzRXwd0iltpUu-6dL14AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "NqStYoLV85Y",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "hlf8EV3mpgcTQje-HU3u-kAZ0jM",
        id: "UgzRXwd0iltpUu-6dL14AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "NqStYoLV85Y",
          textDisplay: "Super",
          textOriginal: "Super",
          authorDisplayName: "Gobal Krishnan V",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AL5GRJV2dE5_DMlAWKLm40iElPjLXuJn8m0_olSCBhhaZQ=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCA61ucKLgDQlUoSH4oGNiMQ",
          authorChannelId: {
            value: "UCA61ucKLgDQlUoSH4oGNiMQ",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1,
          publishedAt: "2023-02-12T00:22:57Z",
          updatedAt: "2023-02-12T00:22:57Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "SVCsrOA9BWuqqIw372pWzrvNfGk",
    id: "UgxIUheIoFZubVnv8p94AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "5Nl9t-miazg",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "DEcupf_oY4XcgLtk-9qE-fW-UiI",
        id: "UgxIUheIoFZubVnv8p94AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "5Nl9t-miazg",
          textDisplay:
            "Came for TFjs, stayed for the excellent intro and state of ML/DL development and usecases! Great series thanks alot 🙏",
          textOriginal:
            "Came for TFjs, stayed for the excellent intro and state of ML/DL development and usecases! Great series thanks alot 🙏",
          authorDisplayName: "Tom Has",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AL5GRJX0zx2VVV9Js9Bb6SgJDTwgRnbaW0SOebA08PL7kg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCe1eRRoew6OUWPoHG5TEdJg",
          authorChannelId: {
            value: "UCe1eRRoew6OUWPoHG5TEdJg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 2,
          publishedAt: "2023-02-11T23:21:11Z",
          updatedAt: "2023-02-11T23:21:11Z",
        },
      },
      canReply: true,
      totalReplyCount: 2,
      isPublic: true,
    },
    replies: {
      comments: [
        {
          kind: "youtube#comment",
          etag: "CjAHXk5XGbfvIfZfO74l06xTNEY",
          id: "UgxIUheIoFZubVnv8p94AaABAg.9m0591EcmC39m0ONZVO6sp",
          snippet: {
            channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            videoId: "5Nl9t-miazg",
            textDisplay:
              "Glad you enjoyed the course! Please do share with folk who could benefit 🙂",
            textOriginal:
              "Glad you enjoyed the course! Please do share with folk who could benefit 🙂",
            parentId: "UgxIUheIoFZubVnv8p94AaABAg",
            authorDisplayName: "Jason Mayes",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJURKNLbbfVix5Z8svNBjNc9Ng-gol-93lnre--nXvs=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCQ1nOMih-6ZI5IMFClnc5_Q",
            authorChannelId: {
              value: "UCQ1nOMih-6ZI5IMFClnc5_Q",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-02-12T02:09:12Z",
            updatedAt: "2023-02-12T02:09:12Z",
          },
        },
        {
          kind: "youtube#comment",
          etag: "CjAHXk5XGbfvIfZfO74l06xTNEY",
          id: "UgxIUheIoFZubVnv8p94AaABAg.9m0591EcmC39m0ONZVO6sp",
          snippet: {
            channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            videoId: "5Nl9t-miazg",
            textDisplay: "and eventually,....chatGPT",
            textOriginal: "and eventually,....chatGPT",
            parentId: "UgxIUheIoFZubVnv8p94AaABAg",
            authorDisplayName: "MIDAS redblade",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/7XIePiaaUk-rH145fZHKQUA4AQyBFY7-_rqKByFB8sBs_POvW5hMwBVISZhxhAy8281pZS7_5g=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCQ1nOMih-6ZI5IMFClnc5_Q",
            authorChannelId: {
              value: "UCQ1nOMih-6ZI5IMFClnc5_Q",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-02-12T02:09:12Z",
            updatedAt: "2023-02-12T02:09:12Z",
          },
        },
      ],
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "9OR00VDWzx7A3eGmse4h_d28lQE",
    id: "UgxZ_xmPYQ7DOVMa7Fx4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "NqStYoLV85Y",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "PP_9uqTtrAjOamv6V88wDuloN5g",
        id: "UgxZ_xmPYQ7DOVMa7Fx4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "NqStYoLV85Y",
          textDisplay: "Helo google Developer",
          textOriginal: "Helo google Developer",
          authorDisplayName: "Check Sound Koplo",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/n3mq2lpcMa3jZVW_DwBAenIFzn_e4dmpgwrdWRIi_A0ZidD6vQl_3njDvO8xGsGNTkWcwdHY9w=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UClQcyWTksK4BdKXR-HZ7qbg",
          authorChannelId: {
            value: "UClQcyWTksK4BdKXR-HZ7qbg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 3,
          publishedAt: "2023-02-11T22:34:02Z",
          updatedAt: "2023-02-11T22:34:02Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "HKuZAk4a1_CP99WCN4OiJc11noo",
    id: "UgzNOi64BHYuKFBmM-l4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "wvsE8jm1GzE",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "UMiAJhXxm8DgrO6mnjejF3YKITQ",
        id: "UgzNOi64BHYuKFBmM-l4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "wvsE8jm1GzE",
          textDisplay: "and eventually,....chatGPT",
          textOriginal: "and eventually,....chatGPT",
          authorDisplayName: "MIDAS redblade",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AL5GRJXSHAuunqUYPFk_8hKSnLG_yLonKWOEICxIrG9wVx7-JttmV9o7tqd9_tyBu_wl=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCLuefVvFJ-l3GbtiW48xZbg",
          authorChannelId: {
            value: "UCLuefVvFJ-l3GbtiW48xZbg",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-11T13:58:51Z",
          updatedAt: "2023-02-11T13:58:51Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "IVvJ0y67CAHuEJ34PlujyP8qxh4",
    id: "UgxfdZG6Di4FTZ3h5-N4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "UBF8UR0qq98",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "HjtMeN2DXVOsgfAuFrwixoc9Yvk",
        id: "UgxfdZG6Di4FTZ3h5-N4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "UBF8UR0qq98",
          textDisplay: "I want to join Google.<br><br>Help me to get this.",
          textOriginal: "I want to join Google.\n\nHelp me to get this.",
          authorDisplayName: "Programming adda",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/7XIePiaaUk-rH145fZHKQUA4AQyBFY7-_rqKByFB8sBs_POvW5hMwBVISZhxhAy8281pZS7_5g=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC3CWTXerqwJoA-pRNh_uLyA",
          authorChannelId: {
            value: "UC3CWTXerqwJoA-pRNh_uLyA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-11T13:35:40Z",
          updatedAt: "2023-02-11T13:35:40Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "K8LC_uV9VFCqHtKEzfaQhK6mfMQ",
    id: "UgybUMcrgiT8ff9CG0V4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "DsTbUYc4n40",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "PUK8ZOR2nbNhkMxthaIdaGDgnyI",
        id: "UgybUMcrgiT8ff9CG0V4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "DsTbUYc4n40",
          textDisplay:
            "How to I can join google?<br><br>Is any google person contact me?",
          textOriginal:
            "How to I can join google?\n\nIs any google person contact me?",
          authorDisplayName: "Programming adda",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/7XIePiaaUk-rH145fZHKQUA4AQyBFY7-_rqKByFB8sBs_POvW5hMwBVISZhxhAy8281pZS7_5g=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UC3CWTXerqwJoA-pRNh_uLyA",
          authorChannelId: {
            value: "UC3CWTXerqwJoA-pRNh_uLyA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1,
          publishedAt: "2023-02-11T13:34:39Z",
          updatedAt: "2023-02-11T13:34:39Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "lhnjcIj103UwMv0CeLB_dK9U5gQ",
    id: "UgxUecwovBTcYzVHu0F4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "tNo9IoZMelI",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "2C76hNkMwUhx1wz_L0kjYYTdMwg",
        id: "UgxUecwovBTcYzVHu0F4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "tNo9IoZMelI",
          textDisplay: "great content",
          textOriginal: "great content",
          authorDisplayName: "Nick Byrne",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AL5GRJWzEvZ15WQc2bfT2T-ZwRGmznYZyUbVvkKIhiECLA=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UChXMiKPgdYaZOBfk52IQgtQ",
          authorChannelId: {
            value: "UChXMiKPgdYaZOBfk52IQgtQ",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-11T01:37:14Z",
          updatedAt: "2023-02-11T01:37:14Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "6TgbwMZu-Ofv_dVdJH1vWxw0nHA",
    id: "Ugzax8LUkmdievR5thB4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "Srm4WJLl6KQ",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "C2S7sLEaFL7XVDU7p_qJcYpN4so",
        id: "Ugzax8LUkmdievR5thB4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "Srm4WJLl6KQ",
          textDisplay: "Nice, I didn&#39;t know about this. Good job Google!",
          textOriginal: "Nice, I didn't know about this. Good job Google!",
          authorDisplayName: "Banzai316",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/-SICkg_AlAEwZTCCpaHYeRKHHF1ComFM6234sAcdKYRpS3Q6t0ZLPPMmhNm897b-aen196dZ4g=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCt1DIsM6gXnyqF8DNn7B7wA",
          authorChannelId: {
            value: "UCt1DIsM6gXnyqF8DNn7B7wA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-10T23:47:09Z",
          updatedAt: "2023-02-10T23:47:09Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "WsUErns054yOLARBiunm0_rci-k",
    id: "UgzdJ6V0oXIVGiEc0Hx4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "PHpveYiS0OQ",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "VlERy4S3QS1l7QfyGc8tmS7ytgs",
        id: "UgzdJ6V0oXIVGiEc0Hx4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "PHpveYiS0OQ",
          textDisplay: "It &#39;s time star behaving that way AAA",
          textOriginal: "It 's time star behaving that way AAA",
          authorDisplayName: "Daniel Gomez",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AL5GRJXcXEOYgIgtXX5ZtYL70zRfnGUyWJYFIIrNjiFamIFWt0vZYy0YW5jUUXGxarnq=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCrKb8G_RRhgKin_Y03Fgl4g",
          authorChannelId: {
            value: "UCrKb8G_RRhgKin_Y03Fgl4g",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-10T22:34:50Z",
          updatedAt: "2023-02-10T22:34:50Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "cgFsHieRDvynOAJDSH05fXp0ygE",
    id: "UgyAIMxLvdEF_PqeNcR4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "Nf1n4i98d5g",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "QWWhTzel09KNdj9qyVq_LWkLuwI",
        id: "UgyAIMxLvdEF_PqeNcR4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "Nf1n4i98d5g",
          textDisplay:
            "It&#39;s so great! Thank you for creating this course. I plan to code along with the video, but is there reference code available on github?",
          textOriginal:
            "It's so great! Thank you for creating this course. I plan to code along with the video, but is there reference code available on github?",
          authorDisplayName: "David Learn",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AL5GRJUoxsKsJ6MgXBVNnCgesJ80ByUs0Go2RnQtIYP1p6yuPu2riXr_o2dWwphqULML=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCb3zTBDf6LodT3izOgOqzTw",
          authorChannelId: {
            value: "UCb3zTBDf6LodT3izOgOqzTw",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-10T22:28:33Z",
          updatedAt: "2023-02-10T22:28:33Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "K7D7jjSKYIt_s1WR7gWW01h1ego",
    id: "Ugzs5rtd6yT5rZjqaQV4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "fq4N0hgOWzU",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "cahqMOhA6AXLSdPrmHNZETuphV8",
        id: "Ugzs5rtd6yT5rZjqaQV4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "fq4N0hgOWzU",
          textDisplay:
            "Yes, but what is it? Is it an MVC architecture? Does it have a graphics communication protocol, and what is it then?",
          textOriginal:
            "Yes, but what is it? Is it an MVC architecture? Does it have a graphics communication protocol, and what is it then?",
          authorDisplayName: "Rursus",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/ytc/AL5GRJWh-RUCPwu-jzlT4asPA-fSPdAG6GcExNFZLYB7=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCWewbr7cMroG5rCEpOHU36A",
          authorChannelId: {
            value: "UCWewbr7cMroG5rCEpOHU36A",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 0,
          publishedAt: "2023-02-10T19:21:11Z",
          updatedAt: "2023-02-10T19:21:11Z",
        },
      },
      canReply: true,
      totalReplyCount: 0,
      isPublic: true,
    },
  },
  {
    kind: "youtube#commentThread",
    etag: "aIpubcKYIVCeq1YmFHvy2KDlHD0",
    id: "Ugzlo8UL5-UiUNtY8yB4AaABAg",
    snippet: {
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      videoId: "KC3iHks7wFs",
      topLevelComment: {
        kind: "youtube#comment",
        etag: "feicX75dWTS35OGufrVdfB4IUTs",
        id: "Ugzlo8UL5-UiUNtY8yB4AaABAg",
        snippet: {
          channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          videoId: "KC3iHks7wFs",
          textDisplay:
            "Very Helpful regards. I have subscribed and followed social media links.",
          textOriginal:
            "Very Helpful regards. I have subscribed and followed social media links.",
          authorDisplayName: "Harri TV HMN",
          authorProfileImageUrl:
            "https://yt3.ggpht.com/p05k0SeLi7Ya3vFfLx4YdXPwSGRn_UWWWbkRfpA08UAda6O7pJwIb81-X3tQzzM0y4LVP8urVg=s48-c-k-c0x00ffffff-no-rj",
          authorChannelUrl:
            "http://www.youtube.com/channel/UCY4TezLHhxtFxMsPHVNJirA",
          authorChannelId: {
            value: "UCY4TezLHhxtFxMsPHVNJirA",
          },
          canRate: true,
          viewerRating: "none",
          likeCount: 1,
          publishedAt: "2023-02-10T15:29:12Z",
          updatedAt: "2023-02-10T15:29:12Z",
        },
      },
      canReply: true,
      totalReplyCount: 1,
      isPublic: true,
    },
    replies: {
      comments: [
        {
          kind: "youtube#comment",
          etag: "Fa6fTalOqkTxMS7blzKZLN_AGiQ",
          id: "Ugzlo8UL5-UiUNtY8yB4AaABAg.9lxfLG4li5D9lz_mj4GSKI",
          snippet: {
            channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
            videoId: "KC3iHks7wFs",
            textDisplay: "Thanks for the follow and glad you are enjoying!",
            textOriginal: "Thanks for the follow and glad you are enjoying!",
            parentId: "Ugzlo8UL5-UiUNtY8yB4AaABAg",
            authorDisplayName: "Jason Mayes",
            authorProfileImageUrl:
              "https://yt3.ggpht.com/ytc/AL5GRJURKNLbbfVix5Z8svNBjNc9Ng-gol-93lnre--nXvs=s48-c-k-c0x00ffffff-no-rj",
            authorChannelUrl:
              "http://www.youtube.com/channel/UCQ1nOMih-6ZI5IMFClnc5_Q",
            authorChannelId: {
              value: "UCQ1nOMih-6ZI5IMFClnc5_Q",
            },
            canRate: true,
            viewerRating: "none",
            likeCount: 0,
            publishedAt: "2023-02-11T09:19:09Z",
            updatedAt: "2023-02-11T09:19:09Z",
          },
        },
      ],
    },
  },
];

const Commont = ({ snippet }) => {
  //   const { name, text, replies } = data;
  const { textOriginal, authorDisplayName, authorProfileImageUrl } = snippet;
  return (
    <div className="flex shadow-sm p-2 bg-gray-100 rounded-lg m-1">
      <img
        className="h-12 w-12 rounded-full"
        src={authorProfileImageUrl}
        alt="comment logo"
      />
      <div className="px-3">
        <h1 className="font-bold">{authorDisplayName}</h1>
        <h2>{textOriginal}</h2>
      </div>
    </div>
  );
};

const CommontsList = ({ comments }) => {
  return comments.map((value) => {
    return (
      <div key={value.id}>
        <Commont snippet={value?.snippet?.topLevelComment?.snippet} />
        <div className="pl-5 border border-l-black ml-5">
          {value?.replies &&
            value?.replies?.comments.map((subValue) => {
              return <Commont key={subValue.id} snippet={subValue?.snippet} />;
            })}
        </div>
      </div>
    );
  });
};

const CommentsContainer = ({ youTubeVideoId }) => {
  //   const [commontsList, setCommentsList] = useState([]);

  //   useEffect(() => {
  //     getCommentslist();
  //   }, []);

  //   const getCommentslist = async () => {
  //     const response = await Youtube_API(youTubeVideoId);
  //     console.log(response);
  //   };

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {CommentData && <CommontsList comments={CommentData} />}
    </div>
  );
};

export default CommentsContainer;
