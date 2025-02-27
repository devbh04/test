'use client'

import { HeroCard } from "@/components/shared/heroCard";

export default function Heroes() {
  return (
    <div className="p-8">
      {/* Core Committee Section */}
      <div>
        <h1 className="text-4xl font-semibold flex justify-center">Core Committee</h1>
        <div>
          {/* Head and Associate Head */}
          <div className="flex flex-col xl:flex-row justify-center items-center gap-14 pt-16">
            {coreCommittee
              .filter((member) => member.role === "Head" || member.role === "Associate Head")
              .map((member, index) => (
                <HeroCard
                  key={index}
                  imglink={member.imgsrc}
                  role={member.role}
                  name={member.name}
                  insta={member.instalink}
                  ln={member.lilink}
                  x={member.gitlink} // Assuming 'x' is for GitHub
                />
              ))}
          </div>
          {/* Other Heads */}
          <div className="flex flex-col xl:flex-row xl:flex-wrap justify-center items-center gap-14 pb-16">
            {coreCommittee
              .filter(
                (member) =>
                  member.role !== "Head" && member.role !== "Associate Head"
              )
              .map((member, index) => (
                <HeroCard
                  key={index}
                  imglink={member.imgsrc}
                  role={member.role}
                  name={member.name}
                  insta={member.instalink}
                  ln={member.lilink}
                  x={member.gitlink} // Assuming 'x' is for GitHub
                />
              ))}
          </div>
        </div>
      </div>

      <div>
      <h1 className="text-4xl font-semibold flex justify-center">Tech Committee</h1>
      <div>
        {/* Tech Committee Members */}
          <div className="flex flex-col xl:flex-row xl:flex-wrap xl:mx-96 justify-center items-center gap-14 p-16">
            {techCommittee.map((member, index) => (
              <HeroCard
                key={index}
                imglink={member.imgsrc}
                role={member.role}
                name={member.name}
                insta={member.instalink}
                ln={member.lilink}
                x={member.gitlink} // Assuming 'x' is for GitHub
              />
            ))}
          </div>
        </div>
      </div>

      <div>
      <h1 className="text-4xl font-semibold flex justify-center text-center">Non-Tech Committee</h1>
      <div>
        {/* Tech Committee Members */}
          <div className="flex flex-col xl:flex-row xl:flex-wrap xl:mx-96 justify-center items-center gap-14 p-16">
            {nonTechCommittee.map((member, index) => (
              <HeroCard
                key={index}
                imglink={member.imgsrc}
                role={member.role}
                name={member.name}
                insta={member.instalink}
                ln={member.lilink}
                x={member.gitlink} // Assuming 'x' is for GitHub
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const coreCommittee = [
  {
    name: "Amruta Patil",
    role: "Head",
    imgsrc: "https://i.postimg.cc/QMDLWS5r/amruta-formal.jpg",
    gitlink: "https://github.com/Ames-16",
    lilink: "www.linkedin.com/in/amruta-a-patil",
    instalink: "https://www.instagram.com/include_amruta.p?igsh=MTZkMjV6YWJ3cXUwcQ==",
  },
  {
    name: "Pushkar Deore",
    role: "Associate Head",
    imgsrc: "https://i.postimg.cc/KzrvKRYR/20231112-082614.jpg",
    gitlink: "https://github.com/PUSHKARDEORE",
    lilink: "https://www.linkedin.com/in/pushkar-deore-118b001b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/pushkar.ipynb?igsh=N2psYW1jZTFyNGhy",
  },
  {
    name: "Samarth Ghante",
    role: "Technical Head",
    imgsrc: "https://i.postimg.cc/br9Px2yC/during-the-session.jpg",
    gitlink: "https://github.com/SamarthGhante",
    lilink: "https://www.linkedin.com/in/samarth-ghante/",
    instalink: "",
  },
  {
    name: "Amey Gulhane",
    role: "Non-Tech Head",
    imgsrc: "https://i.postimg.cc/LX9TmTpK/IMG-20240921-101148457-HDR.jpg",
    gitlink: "https://github.com/amey21012004",
    lilink: "https://www.linkedin.com/in/amey-gulhane-672b69292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/amey_gulhane?igsh=MTFkbXN1Y2hrMDV5cA==",
  },
  {
    name: "Abhinav Mehta",
    role: "CTF Head",
    imgsrc: "https://i.postimg.cc/DwmJQpmc/Abhinav-Mehta-CTF-HEad.jpg",
    gitlink: "https://github.com/A-b-h-i-n-a-v-1-9",
    lilink: "https://www.linkedin.com/in/abhinav-mehta-224968290/",
    instalink: "https://www.instagram.com/abhinav_1995/?hl=en",
  },
  {
    name: "Pratik Dhage",
    role: "Sponsorship Head",
    imgsrc: "https://i.postimg.cc/QMx9y7V7/Pratik-Dhage-Core.jpg",
    gitlink: "https://github.com/pratikdhage01",
    lilink: "www.linkedin.com/in/pratik-dhage01",
    instalink: "https://www.instagram.com/pratik_dhage_01/profilecard/?igsh=aDQycG5pdGxvdTRi",
  },
];

const techCommittee = [
  {
    name: "Parnika Maskar",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/FFjKwgzS/Parnika-Maskar-Tech-PARNIKA-MASKAR.jpg",
    gitlink: "https://github.com/ParnikaMaskar",
    lilink: "www.linkedin.com/in/parnika-maskar",
    instalink: "https://www.instagram.com/_.parnika1208._/",
  },
  {
    name: "Rakshika Batra",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/508xdb4J/Whats-App-Image-2024-08-30-at-21-25-34-980c5271-RAKSHIKA-BATRA.jpg",
    gitlink: "https://github.com/rakshika19",
    lilink: "https://www.linkedin.com/in/rakshika-batra-39ba99281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/rakshikabatra_08?igsh=MWVpc2Q3N2Nib3huaA==",
  },
  {
    name: "Utkarsh Shirsath",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/wBZvYwDX/Utkarsh-Shirsath-Tech-2351-UTKARSH-SHIRSATH.jpg",
    gitlink: "https://github.com/Utkarsh-Shirsath",
    lilink: "https://www.linkedin.com/in/utkarsh-shirsat-0b1115188/",
    instalink: "https://www.instagram.com/utkarsh..5?igsh=MW5kZnZ3dWd0N2pycA==",
  },
  {
    name: "Riya Shah",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/J4NBcCZ9/Riya-Shah-tech-54-RIYA-SHAH.jpg",
    gitlink: "https://github.com/ri285",
    lilink: "https://www.linkedin.com/in/riya-shah-8a09b1290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/riyaashah_0208/",
  },
  {
    name: "Yash Swami",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/L5zhTjYz/Yash_Swami_Tech_-_SY_A_52_YASH_SWAMI.png",
    gitlink: "https://github.com/yashs00",
    lilink: "https://www.linkedin.com/in/yash-swami-9a9b67219",
    instalink: "https://www.instagram.com/the_10thperson?igsh=MWxiejFhMmlxMXl1aA==",
  },
  {
    name: "Ananya Bisht",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/K8Qkw79f/Ananya-Bisht-Tech-BISHT-ANANYA.jpg",
    gitlink: ".",
    lilink: "https://www.linkedin.com/in/ananya-bisht-134470319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/ya_bishtie?igsh=MTRsMmN0NWI4MmFldA==",
  },
  {
    name: "Dhruv Rajhans",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/WprDTcWh/DHRUV-RAJHANS-Tech.jpg",
    gitlink: "https://github.com/CoderDhruv23",
    lilink: "https://in.linkedin.com/in/dhruv-rajhans-95b039262",
    instalink: "https://www.instagram.com/dhruv_yeet_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Pranav Bhosale",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/NFgv3XC8/pranav-bhosale-nontech-jpeg-69-Pranav-Bhosale.jpg",
    gitlink: "https://github.com/PranavBhosale1",
    lilink: "www.linkedin.com/in/pranavbhosale1905",
    instalink: "https://www.instagram.com/pranav_bhosale69/",
  },
  {
    name: "Om Pannase",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/SR7N8q3d/IMG20230907132028-OM-PANNASE.jpg",
    gitlink: "https://github.com/ompannase",
    lilink: "https://www.linkedin.com/in/om-pannase-7a5a3828a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/om_capture_?igsh=aWI5dHFpZHkyYTJu",
  },
  {
    name: "Ashita Kolla",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/jqQsMx3Q/Ashita-Kolla-Tech-73-Ashita-Kolla.jpg",
    gitlink: "https://github.com/ashflawless10",
    lilink: "https://www.linkedin.com/in/ashita-kolla-a54b65292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/ashflawless10?igsh=c3dxZHZobzE1dG94",
  },
  {
    name: "Annany Sharma",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/GtQdtKTS/Annany-Sharma-Tech-ANNANY-SHARMA.jpg",
    gitlink: "https://github.com/Annany-12",
    lilink: "https://www.linkedin.com/in/annany-sharma-94b195292/",
    instalink: "https://www.instagram.com/annany_12/?hl=en",
  },
  {
    name: "Pratham Nandgaonkar",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/BvLSp2RX/Pratham-Nandgaonkar-Tech-PRATHAM-NANDGAONKAR.jpg",
    gitlink: "https://github.com/PrathamNandgaonkar",
    lilink: "https://www.linkedin.com/in/pratham-nandgaonkar-835a1928a/",
    instalink: "https://www.instagram.com/_.prathmmm/",
  },
  {
    name: "Purrva Bothra",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/Xq3nnmqC/Purrva-Bothra-Tech-PURRVA-BOTHRA.jpg",
    gitlink: "https://github.com/Purrva",
    lilink: "https://www.linkedin.com/in/purrva-bothra",
    instalink: "https://www.instagram.com/purrva24",
  },
  {
    name: "Dhanashri Bodke",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/Mp4xnvXx/Dhanashri-Bodke-tech-2343-Dhanashri-Bodke.png",
    gitlink: "https://github.com/DhanashriBodke",
    lilink: "https://www.linkedin.com/in/dhanashri-bodke-6885b828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "I don't have an account",
  },
  {
    name: "Bhakti Patil",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/jdMRr8bD/Bhakti-Patil-Cyber-Cell-Viitt-2349-Bhakti-Patil.jpg",
    gitlink: "https://github.com/Scriptingreality",
    lilink: "https://www.linkedin.com/in/bhakti-patil-354406285/",
    instalink: "https://www.instagram.com/bhaktiii_.p?igsh=MXJla2JnbTdzZmZ1bA==",
  },
  {
    name: "Kaustubh Khisti",
    role: "Tech Team",
    imgsrc: "https://i.postimg.cc/CxdSMjhm/Photo-1-FY-C-51-Kaustubh-Khisti.jpg",
    gitlink: "https://github.com/ksk911",
    lilink: "https://www.linkedin.com/in/kaustubh-khisti-5b8558294/",
    instalink: "https://www.instagram.com/notksk2709?igsh=MTB1bm91eDY4empkNA==",
  },
];

const nonTechCommittee = [
  {
    name: "Aaryan Raorane",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/bwvNG7T0/Aaryan-Raorane-Nontech-2159-Aaryan-Raorane.png",
    gitlink: "https://github.com/aaryanxraorane",
    lilink: "www.linkedin.com/in/aaryan-raorane-50189628a",
    instalink: "https://www.instagram.com/aaryannnr?igsh=bXdybnJ6amphZTNu&utm_source=qr",
  },
  {
    name: "Anvay Kulkarni",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/hG5JPDR7/Anvay-Kulkarni-68-ANVAY-KULKARNI.png",
    gitlink: "https://github.com/Anvaykulkarni",
    lilink: "https://www.linkedin.com/in/anvay-kulkarni-609662279",
    instalink: "https://www.instagram.com/anvaykulkarni?igsh=MWFnZGpsemJuNHhqNg==",
  },
  {
    name: "Sai Kulkarni",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/6Qk9myNz/20240830-222312-B-37-Sai-Kulkarni.jpg",
    gitlink: "username-ksaiiee",
    lilink: "https://www.linkedin.com/in/sai-k-49a9622b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/saik_318?igsh=MTF4N3ozeW85ZXM1ZQ==",
  },
  {
    name: "Sakina Bootwala",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/ZRvWWGJs/Sakina-bootwala-nontech-57-SAKINA-BOOTWALA.jpg",
    gitlink: "https://github.com/Sakinabootwala52",
    lilink: "https://www.linkedin.com/in/sakina-bootwala-3277332aa",
    instalink: "https://www.instagram.com/__sakina__23?igsh=ZTBtamVtY21yazNt&utm_source=qr",
  },
  {
    name: "Pranit Govande",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/C19fJFvV/Pranit-Govande-Event-Head-PRANIT-GOVANDE-102471-Pranit.jpg",
    gitlink: "https://github.com/Pranit1225",
    lilink: "https://www.linkedin.com/in/pranit-govande-profile/",
    instalink: "https://www.instagram.com/pranit_1225/",
  },
  {
    name: "Jay Rajankar",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/hjXd9J1r/Jay-Rajankar-nontech-56-JAY.jpg",
    gitlink: "https://github.com/JayRajankar",
    lilink: "https://www.linkedin.com/in/jay-rajankar-b90584200/",
    instalink: "https://www.instagram.com/j.ai_jay/",
  },
  {
    name: "Rushikesh Nyati",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/6Qy3Pk46/Rushikesh-Nyati-nontech-jpg-2134-Rushikesh-Nyati.jpg",
    gitlink: "https://github.com/Rushikesh-Nyati",
    lilink: "www.linkedin.com/in/rushikeshnyati",
    instalink: "https://www.instagram.com/rushi_21_/",
  },
  {
    name: "Shubhangi Kale",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/tJPnMLfn/IMG-20240320-WA0045-01-SHUBHANGI-KALE.jpg",
    gitlink: "https://github.com/Shubhangi214",
    lilink: "https://www.linkedin.com/in/shubhangi-kale-42b824295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/s_kale02?igsh=MWZ1ZjlvODZ2OWF5Mg==",
  },
  {
    name: "Shrinidhhi Gundewar",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/mrDzscJs/Whats-App-Image-2024-08-30-at-18-46-37-B-54-Shrinidhi-Gundewar.jpg",
    gitlink: "https://github.com/settings/profile",
    lilink: "www.linkedin.com/in/shrinidhi-gundewar-a06a891a5",
    instalink: "https://www.instagram.com/shrinidhir1511_?igsh=N2U5NG96Z2djeno5",
  },
  {
    name: "Kunal Kalawant",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/3JFd0CHh/Kunal-Kalawant-nontech-2365-Kunal-Kalawant.jpg",
    gitlink: "https://github.com/KunalKalawant",
    lilink: "www.linkedin.com/in/kunal-kalawant-549a37322",
    instalink: "https://www.instagram.com/kunal_kalawant?igsh=MXR0aW94bXdlYXByYQ%3D%3D&utm_source=qr",
  },
  {
    name: "Manas Kulkarni",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/02k93TLg/manas-kulkarni-nontech-A-58-Manas-Kulkarni.jpg",
    gitlink: "https://github.com/itsmanask",
    lilink: "https://www.linkedin.com/in/manas-kulkarni-81a859167?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/itsmanask?igsh=dTZsbXg4d3BnYXpt",
  },
  {
    name: "Sujal Kadam",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/fy4Jm8Lz/Sujal-Kadam-nontech-51-SUJAL-KADAM.jpg",
    gitlink: "https://github.com/withonly-sujal",
    lilink: "www.linkedin.com/in/sujal-kadam-bb5663287",
    instalink: "https://www.instagram.com/withonly_sujal/",
  },
  {
    name: "Bhumi Gambhire",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/Y0m1YXw8/Screenshot_2024-08-30-22-40-53-70_92460851df6f172a4592fca41cc2d2e6_-_BHUMI_GAMBHIRE.jpg",
    gitlink: "https://github.com/bhumi-2005",
    lilink: "https://www.linkedin.com/in/bhumi-gambhire-b677bb28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/bhumii.1224?igsh=Y3l5OGdnODZrbWU0",
  },
  {
    name: "Karan kalawant",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/FRX4x8jB/karan-kalawant-nontech-KARAN-KALAWANT-102464-Karan.jpg",
    gitlink: "https://github.com/karankalawant",
    lilink: "https://www.linkedin.com/in/karan-kalawant-b7745a318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instalink: "https://www.instagram.com/karan_kalawant?igsh=MTIzYWx5ZmV3NGxydQ%3D%3D&utm_source=qr",
  },
  {
    name: "Vivek Bhange",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/P5LnnTy7/Vivek-Bhange-Non-Tech-03-Vivek-Bhange.png",
    gitlink: "https://github.com/iamvivek1999",
    lilink: "https://www.linkedin.com/in/viveksainathbhange",
    instalink: "https://www.instagram.com/iamvivekbhange?igsh=Z2ZocmozMG5qaHYx",
  },
  {
    name: "Prasanna Patil",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/25ZYhrBW/Prasanna-Patil-nontech-ctf-Prasanna-Patil.jpg",
    gitlink: "N/A",
    lilink: "https://www.linkedin.com/in/prasanna-patil-3a1280269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/prasannapatil91?igsh=NWJ0NWRpdzB6MXA1",
  },
  {
    name: "Sharayu Shitole",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/mD3Gpjj2/Sharayu-Shitole-nontech-SHARAYU-SHITOLE.jpg",
    gitlink: "-",
    lilink: "http://linkedin.com/in/sharayu-shitole-b1171929a",
    instalink: "https://www.instagram.com/sharayushitole_7?igsh=MWY2NWkxamEzZGFsaQ%3D%3D&utm_source=qr",
  },
  {
    name: "Pranav Bhosale",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/NfDjjs1f/pranav-bhosale-tech-69-Pranav-Bhosale.jpg",
    gitlink: "https://github.com/PranavBhosale1",
    lilink: "https://www.linkedin.com/in/pranavbhosale1905/",
    instalink: "https://www.instagram.com/pranav_bhosale69/",
  },
  {
    name: "Krishna Gandhi",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/QxYZzHQ5/IMG-20240831-WA0000-44-Krishna-Gandhi.jpg",
    gitlink: "N/A",
    lilink: "https://www.linkedin.com/in/krishna-gandhi-9281aa28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "https://www.instagram.com/momentum_020?igsh=MmJwdjltcDhrd3Jh",
  },
  {
    name: "Gaurav Kaushalye",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/tgXJz1p6/my-photo-55-GAURAV-KAUSHALYE-102255-GAURAV.jpg",
    gitlink: "na",
    lilink: "www.linkedin.com/in/gaurav-kaushalye",
    instalink: "https://www.instagram.com/kaushalye_gaurav?igsh=dDR6NTRoMnFseWth",
  },
  {
    name: "Yash Gughane",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/MZDSysX9/IMG-20240313-004837-YASH-GUGHANE.jpg",
    gitlink: "_",
    lilink: "https://www.linkedin.com/in/yash-gughane-0a01292a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instalink: "_",
  },
  {
    name: "Yash Jogdand",
    role: "Non-Tech Team",
    imgsrc: "https://i.postimg.cc/h4YJ96Gp/Yash-Jogdand.jpg",
    gitlink: "https://github.com/Yash-dev33",
    lilink: "https://www.linkedin.com/in/yash-jogdand-aaa78b28a/",
    instalink: "https://www.instagram.com/ssup.yash33",
  },
];