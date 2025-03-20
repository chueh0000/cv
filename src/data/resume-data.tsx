import {
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "闕中豪 Chueh Chung Hao",
//   initials: "CCH",
  location: "Taiwan",
  locationLink: "https://maps.app.goo.gl/hvh9kTr7z278B9Ae7",
  about:
    "Student at National Taiwan University major in Computer Science and Information Engineering",
  summary:
    "",
    // https://drive.google.com/file/d/1KvcMGTF50KMkqn4CTyNuwvzM5wPjde6p/view?usp=drive_link
  avatarUrl: "https://drive.google.com/a/g.ntu.edu.tw/thumbnail?id=1KvcMGTF50KMkqn4CTyNuwvzM5wPjde6p",
//   avatarUrl: "",
  personalWebsiteUrl: "https://chueh-chung-hao-english.vercel.app/",
  contact: {
    email: "b10902076@csie.ntu.edu.tw",
    tel: "(+886)971612015",
    social: [
      {
        name: "GitHub",
        text: "chueh0000",
        url: "https://github.com/chueh0000",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        text: "Chung Hao Chueh",
        url: "https://www.linkedin.com/in/chung-hao-chueh-7b939031a",
        icon: LinkedInIcon,
      }
    ],
  },
  jobObjectives: {
    company: "",
    positions: "",
  },
  education: [
    {
      school: "國立臺灣大學",
      degree: "資訊工程學系 四年級",
      start: "",
      end: "預計 2026.06 畢業",
      description: "UNIX 系統程式設計, 平行程式設計\n\
                    計算機結構, 計算機網路\n\
                    數位系統與實驗, 計算機系統實驗\n\
                    人工智慧導論, 生成式人工智慧導論\n\
                    智慧型汽車導論",
    },
    {
      school: "臺中市立臺中第一高級中等學校",
      degree: "普通科",
      start: "2018",
      end: "2021",
      description: "",
    },
  ],
  work: [
    {
      company: "Microsoft Engage 微軟身心障礙大學生培養計劃 🔗",
      link: "https://github.com/chueh0000/Realtime-Speech-Summary",
      badges: [],
      title: "",
    //   logo: ,
      start: "2024.07",
      end: "2024.08",
      description:
        "從製作無障礙工具的想法出發，與組員合作開發即時語音摘要軟體，在不到一個月的時間內完成原型\n\
        使用 OpenAI Whisper 將語音轉成文字，透過 Google Gemini 摘要，最後使用 Streamlit 合併功能、設計出原型\n\
        採取模組化的設計，讓軟體容易維護和升級，摘要和語音轉文字的功能可以在未來更換成更好的模型\n\
        程式碼公開在 GitHub，進行協作開發以及版本控制",
    },
    {
      company: "臺大身心障礙學生權益促進會 🔗",
      link: "https://www.facebook.com/NTUDSRA/",
      badges: [],
      title: "總務 → 社長",
    //   logo: ,
      start: "2022",
      end: "2024",
      description:
        "提供身心障礙學生相互交流之平台，並舉辦障礙議題講座，提升大眾對障礙者的認知\n\
        積極與校外夥伴合作，和臺師大身心障礙學生促進會，共同舉辦第一屆身心障礙青年人權培力營\n\
        計劃成立台灣障礙青年協會，凝聚青年世代障礙者的聲音，促進交流和連結，期望形成具有共同身份認同的社群",
    },
    {
      company: "臺大特殊教育推行委員會 🔗",
      link: "https://intriguing-product-094.notion.site/2629b4df7459473a8b3734fc3becd73b?v=3ce71c9085134bc8b424ce622d8526d3&pvs=4",
      badges: [],
      title: "委員（學生代表）",
    //   logo: ,
      start: "2023",
      end: "2024",
      description:
        "協助學校建構友善、無障礙的校園環境\n\
        透過 Notion 網頁公開會議提案進度，保障資訊的開放性、可近性",
    },
    {
      company: "臺大學生申訴評議委員會",
      link: "",
      badges: [],
      title: "委員（身心障礙學生代表）",
    //   logo: ,
      start: "2022",
      end: "2024",
      description:
        "審議學生申訴案件",
    },
    {
      company: "臺大單車社 🔗",
      link: "https://www.instagram.com/ntu_cycling_club",
      badges: [],
      title: "庶務",
    //   logo: ,
      start: "2022",
      end: "2023",
      description:
        "管理及維修保養社團單車\n\
        舉辦騎乘活動，帶領社員完成「環島」、「北進武嶺」、「蘇花公路」、「花東縱谷」",
    },
  ],
  skills: [
    "C",
    "Python",
    "Git",
    "Unix",
    "Verilog",
    "CUDA C/C++",
  ],
  languages: [
    "多益英語檢定 915分",
  ],
  projects: [
    // {
    //   title: "",
    //   techStack: [
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //   ],
    //   description: "",
    //   logo: ,
    //   link: {
    //     label: "",
    //     href: "",
    //   },
    // },
  ],
} as const;
