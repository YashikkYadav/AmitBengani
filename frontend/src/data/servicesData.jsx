// src/data/servicesData.js
export const servicesData = [
  {
    id: 1,
    category: "gallbladder-surgeries",
    name: "Gallbladder Surgeries",
    description: "Gallbladder surgery, also known as cholecystectomy, is a common and safe procedure to remove the gallbladder—a small organ beneath the liver that stores bile, which helps digest fats. The surgery is most often recommended for people experiencing gallstones, inflammation, or other gallbladder-related problems.",
    subSurgeries: [
     {
  slug: "laparoscopic-cholecystectomy",
  name: "Laparoscopic Cholecystectomy (Gallbladder removal)",
  description: "Laparoscopic cholecystectomy is a minimally invasive surgical procedure aimed at removing the gallbladder, a small organ responsible for storing bile used in digestion. This procedure has become the gold standard for treating gallbladder diseases such as gallstones and cholecystitis, due to its advantages in reducing recovery time, minimizing pain, and lowering the risk of complications.",
  details: {
    whenNeeded: "Performed when gallstones or gallbladder infections cause pain or complications.",
    preparation: "Ultrasound/CT scan, fasting 6-8 hours before surgery.",
    rehabilitation: "Usually discharged in 1 day, full recovery within 1-2 weeks."
  },
  isItCorrectForYou: [
    "You have recurrent gallstones causing pain.",
    "You experience inflammation of the gallbladder.",
    "Non-surgical treatments have failed."
  ],
  benefits: [
    "Minimally invasive with small incisions.",
    "Short hospital stay and quicker recovery.",
    "Less pain and minimal scarring."
  ],
  challenges: [
    "Possible complications like bleeding or infection.",
    "Rare risk of bile duct injury.",
    "Requires general anesthesia."
  ]
}
,
     {
  "slug": "gallstone-surgery",
  "name": "Gallstone Surgery",
  "description": "Gallstone surgery is performed to treat gallstones that cause pain, infection, or other complications in the gallbladder or bile ducts. The procedure may involve removing the gallbladder or extracting stones from the bile ducts, with the goal of relieving symptoms and preventing future health risks.",
  "details": {
    "whenNeeded": "Recommended when gallstones cause recurrent abdominal pain, infection, jaundice, pancreatitis, or block bile flow.",
    "preparation": "Ultrasound or CT scan, blood tests, fasting 6–8 hours before surgery, and possible ERCP if bile duct stones are suspected.",
    "rehabilitation": "Most laparoscopic patients go home within 24 hours with recovery in 1–2 weeks; open surgery may require 4–6 weeks of recovery and a longer hospital stay."
  },
  "isItCorrectForYou": [
    "You have recurrent or severe abdominal pain due to gallstones.",
    "You experience gallbladder inflammation or infection.",
    "You have gallstones blocking bile ducts, leading to jaundice or pancreatitis.",
    "Non-surgical options are not effective or suitable."
  ],
  "benefits": [
    "Provides a definitive solution for gallstone-related symptoms and complications.",
    "Minimally invasive laparoscopic option allows faster recovery and shorter hospital stay.",
    "Reduces the risk of future gallstone attacks and complications.",
    "Improves quality of life by eliminating recurring pain and digestive issues."
  ],
  "challenges": [
    "Open cholecystectomy may be required in complex cases, leading to longer recovery.",
    "Risks of surgery include infection, bleeding, or injury to nearby structures like the bile duct.",
    "Requires general anesthesia, which carries its own risks.",
    "Temporary digestive changes such as loose stools or difficulty digesting fatty foods may occur after gallbladder removal."
  ]
}
,
     {
  "slug": "choledocholithotomy",
  "name": "Choledocholithotomy (CBD Stone Removal)",
  "description": "Choledocholithotomy is a specialized surgical procedure to remove stones from the common bile duct (CBD), which carries bile from the liver and gallbladder to the small intestine. It is usually considered when less invasive techniques, like endoscopy, are not effective or suitable.",
  "details": {
    "whenNeeded": "Recommended when stones block the common bile duct, causing jaundice, infection, severe pain, or pancreatitis. It is also needed when stones are too large or multiple, when endoscopic removal fails, or when stones are discovered during gallbladder surgery.",
    "preparation": "Diagnostic imaging such as ultrasound, MRCP, or ERCP to confirm stone location; blood tests to check liver function; fasting for 6–8 hours before surgery.",
    "rehabilitation": "Hospital stay may last 2–5 days depending on whether the surgery is laparoscopic or open. Full recovery may take 2–4 weeks for laparoscopic cases and 4–6 weeks for open surgery. If a T-tube is placed, it may remain for a few weeks before removal."
  },
  "isItCorrectForYou": [
    "You have bile duct stones causing blockage, jaundice, or infection.",
    "Endoscopic stone removal (ERCP) has failed or is not an option.",
    "You have large or multiple stones not removable through other methods.",
    "You experience recurrent biliary colic or cholangitis despite non-surgical treatment."
  ],
  "benefits": [
    "Provides definitive removal of bile duct stones and restores normal bile flow.",
    "Prevents serious complications like recurrent infection, cholangitis, or pancreatitis.",
    "Laparoscopic approach offers smaller incisions, less pain, and faster recovery compared to open surgery.",
    "Use of advanced tools like choledochoscopes and intraoperative imaging ensures complete clearance of stones."
  ],
  "challenges": [
    "Technically complex procedure requiring specialized surgical expertise.",
    "Potential risks include bile leakage, infection, bleeding, or injury to the bile duct.",
    "Open surgery may be necessary in difficult cases, leading to longer recovery.",
    "Temporary digestive changes or discomfort may occur if a T-tube is used for drainage."
  ]
}

    ],

  },
   {
    id: 2,
    category: "appendix-surgeries",
    name: "Appendix Surgeries",
    description: "Appendix surgery, commonly known as appendectomy, is a surgical procedure to remove the appendix, a small tube-shaped organ attached to the large intestine. The surgery is primarily performed to treat appendicitis, which is the inflammation and infection of the appendix. If left untreated, appendicitis can cause the appendix to rupture, leading to serious complications such as peritonitis (infection of the abdominal lining).",
    subSurgeries: [
      {
  "slug": "laparoscopic-appendectomy",
  "name": "Laparoscopic Appendectomy",
  "description": "Laparoscopic appendectomy is a minimally invasive surgery used to remove an inflamed appendix through small incisions. It is the preferred method for treating appendicitis due to its smaller scars, reduced pain, faster recovery, and lower risk of infection compared to open surgery.",
  "details": {
    "whenNeeded": "Performed when the appendix is inflamed or infected (appendicitis) to prevent rupture or complications.",
    "preparation": "General anesthesia is given to keep you asleep and pain-free. Fasting for 6–8 hours before surgery is required. Preoperative imaging and blood tests may be done.",
    "rehabilitation": "Most patients are discharged within 1–2 days. Recovery is typically 1–3 weeks depending on complexity. You may need to avoid heavy lifting for a short period."
  },
  "isItCorrectForYou": [
    "You have been diagnosed with appendicitis.",
    "You prefer a minimally invasive option with quicker recovery.",
    "You have no contraindications for laparoscopic surgery (e.g., severe scarring from previous surgeries).",
    "You are an obese patient or have complicated appendicitis, where the laparoscopic approach offers added benefits."
  ],
  "benefits": [
    "Smaller scars, often hidden in natural skin folds.",
    "Less postoperative pain and quicker return to normal activities.",
    "Shorter hospital stays, usually within 24–48 hours.",
    "Lower risk of wound infections and hernias compared to open surgery.",
    "Faster overall recovery, typically within 1–3 weeks."
  ],
  "challenges": [
    "Risk of complications such as bleeding, infection, or injury to nearby organs.",
    "If there is severe infection, abscess, or perforation, conversion to open surgery may be required.",
    "Requires general anesthesia, which carries its own risks.",
    "Some patients may experience temporary bloating or discomfort due to gas used during surgery."
  ]
      }
,
      {
  "slug": "open-appendectomy",
  "name": "Open Appendectomy",
  "description": "Open appendectomy is a traditional surgery where the appendix is removed through a single larger incision in the lower right abdomen. It is usually performed when the appendix is severely inflamed, ruptured, or when laparoscopic surgery is not feasible due to complications, prior surgeries, or extensive infection.",
  "details": {
    "whenNeeded": "Performed when the appendix is ruptured, severely inflamed, or if laparoscopic surgery is not possible due to adhesions, infection, or emergency situations.",
    "preparation": "General anesthesia is administered. Patients typically fast for 6–8 hours before surgery. Preoperative blood tests and imaging may be required.",
    "rehabilitation": "Hospital stay is usually 3–5 days. Full recovery may take 2–4 weeks. Patients are advised to avoid heavy lifting and strenuous activities during recovery."
  },
  "isItCorrectForYou": [
    "You have a ruptured or perforated appendix.",
    "You have extensive abdominal infection or abscess.",
    "You have scar tissue or adhesions from previous surgeries that make laparoscopy difficult.",
    "You need urgent surgery where open access is the safest option."
  ],
  "benefits": [
    "Direct access to the appendix and abdominal cavity.",
    "Effective for complicated or ruptured appendicitis with infection.",
    "Allows thorough cleaning of the abdominal cavity in severe cases.",
    "Does not rely on laparoscopic equipment, useful in emergencies."
  ],
  "challenges": [
    "Larger incision leading to more visible scarring.",
    "Longer hospital stay (3–5 days) and slower recovery compared to laparoscopy.",
    "Increased postoperative pain and discomfort.",
    "Higher risk of wound infection, especially in ruptured cases.",
    "Patients may need a temporary drain if infection or abscess is present."
  ]
}

    ]
  },

  {
    id: 3,
    category: "hernia-surgeries",
    name: "Hernia Surgeries",
    description: "Hernia surgery is performed to repair weakness or defects in the abdominal wall, restoring strength and function while relieving pain and preventing complications. Advances in surgical techniques now offer patients a range of options, tailored to the type of hernia and individual health conditions, including both minimally invasive laparoscopic methods and traditional open surgery.Our center specializes in all major types of hernia repairs, ensuring expert care and the latest technology for optimal recovery and results.",
    subSurgeries: [
      {
  "slug": "laparoscopic-inguinal-hernia-repair",
  "name": "Laparoscopic Inguinal Hernia Repair",
  "description": "Laparoscopic inguinal hernia repair is a minimally invasive procedure designed to treat hernias that develop in the groin region (inguinal hernias). This approach uses small keyhole incisions, a camera, and specialized instruments to repair the hernia and reinforce the abdominal wall with mesh. It offers faster recovery, less pain, and lower recurrence compared to open surgery.",
  "details": {
    "whenNeeded": "Performed when an inguinal hernia causes pain, discomfort, or risk of complications such as bowel obstruction or strangulation.",
    "preparation": "General anesthesia is required. Patients are advised to fast for 6–8 hours before surgery. Basic investigations such as blood tests, ECG, and imaging may be done.",
    "rehabilitation": "Most patients go home the same day or the next day. Light activities can usually resume within 1 week, while full recovery may take 2–3 weeks."
  },
  "isItCorrectForYou": [
    "You have a new inguinal hernia causing symptoms.",
    "You have hernias on both sides of the groin.",
    "You experienced recurrence after a previous hernia repair.",
    "You are fit for general anesthesia without severe cardiac or lung issues."
  ],
  "benefits": [
    "Smaller incisions with less pain and faster recovery.",
    "Minimal scarring and quicker return to daily activities.",
    "Lower risk of infection, recurrence, and chronic discomfort.",
    "Often done as a day-care procedure with short hospital stay."
  ],
  "challenges": [
    "Requires general anesthesia, which may not be suitable for all patients.",
    "Possible complications include bleeding, infection, or mesh-related issues.",
    "Risk of hernia recurrence, though lower compared to open surgery.",
    "Initial recovery may involve mild groin discomfort or swelling."
  ]
}
,
      {
  "slug": "laparoscopic-umbilical-hernia-repair",
  "name": "Laparoscopic Umbilical Hernia Repair",
  "description": "Laparoscopic umbilical hernia repair is a minimally invasive procedure to fix hernias near the navel (umbilicus). Using small incisions and a laparoscope, the surgeon repairs the abdominal wall and reinforces it with mesh. This technique results in smaller scars, reduced pain, and quicker recovery compared to open surgery.",
  "details": {
    "whenNeeded": "Performed when an umbilical hernia causes pain, swelling, or complications, or when the hernia is medium to large in size.",
    "preparation": "General anesthesia is used. Patients are asked to fast for 6–8 hours before surgery, and routine blood and imaging tests may be performed.",
    "rehabilitation": "Most patients go home the same day or within 24 hours. Recovery is typically 1–2 weeks, with faster return to daily activities than open repair."
  },
  "isItCorrectForYou": [
    "You have a medium or large umbilical hernia.",
    "You have a recurrent hernia after a previous repair.",
    "You want smaller scars, less pain, and quicker recovery.",
    "You may need concurrent abdominal surgery."
  ],
  "benefits": [
    "Smaller incisions with minimal scarring.",
    "Reduced pain and swelling after surgery.",
    "Short hospital stay, often same-day discharge.",
    "Faster return to normal activities.",
    "Lower risk of wound infections compared to open repair."
  ],
  "challenges": [
    "Requires general anesthesia.",
    "Possible complications include bleeding, infection, or injury to nearby structures.",
    "Mesh placement, though effective, may rarely cause discomfort or complications.",
    "Not suitable for all patients (e.g., very large or complex hernias may need open repair)."
  ]
}
,
      {
  "slug": "laparoscopic-ventral-incisional-hernia-repair",
  "name": "Laparoscopic Ventral/Incisional Hernia Repair",
  "description": "Laparoscopic ventral and incisional hernia repair is a minimally invasive surgical procedure to correct hernias that occur in weakened areas of the abdominal wall, often at or near the midline or at the site of a previous surgical incision. This approach uses small incisions, a camera, and mesh reinforcement to provide durable repair with faster recovery and less discomfort compared to open surgery.",
  "details": {
    "whenNeeded": "Performed when a ventral or incisional hernia causes pain, bulging, or complications such as obstruction or risk of strangulation.",
    "preparation": "General anesthesia is required. Patients are asked to fast for 6–8 hours before surgery, and preoperative tests (blood work, imaging) may be done to plan the repair.",
    "rehabilitation": "Most patients go home the same day or after 1 night in the hospital. Light activity can begin immediately, with gradual return to daily tasks in 1–2 weeks."
  },
  "isItCorrectForYou": [
    "You have a ventral hernia (bulge through abdominal wall weakness).",
    "You developed a hernia at the site of a previous surgery (incisional hernia).",
    "You want smaller incisions, less pain, and faster recovery than open surgery.",
    "You have a large or recurrent hernia that requires mesh reinforcement.",
    "You are suitable for general anesthesia."
  ],
  "benefits": [
    "Smaller incisions with less postoperative pain.",
    "Reduced wound infection and mesh-related complications compared to open repair.",
    "Shorter hospital stay, often same-day or next-day discharge.",
    "Better visualization helps detect and repair multiple or hidden hernias.",
    "Suitable for obese patients and those with recurrent hernias."
  ],
  "challenges": [
    "Requires general anesthesia.",
    "Possible complications include bleeding, infection, or injury to nearby structures.",
    "Mesh, while effective, may rarely cause discomfort or complications.",
    "Complex or very large hernias may still require open surgery."
  ]
}
,
      {
  "slug": "open-hernia-surgery",
  "name": "Open Hernia Surgery",
  "description": "Open hernia surgery, also called herniorrhaphy or hernioplasty, is a traditional surgical procedure performed through a single larger incision near the hernia site. It is an effective and time-tested technique, especially useful for large, complex, or recurrent hernias, or in cases where minimally invasive surgery may not be suitable.",
  "details": {
    "whenNeeded": "Performed when a hernia causes pain, bulging, or risk of complications, and when laparoscopic repair is not possible or recommended.",
    "preparation": "Patients may receive general, regional, or local anesthesia depending on the hernia type and health condition. Preoperative evaluations such as blood work and imaging may be required.",
    "rehabilitation": "Recovery varies depending on the hernia and patient’s health. Most patients are discharged the same day or within a few days. Return to normal activity usually takes a few weeks, with restrictions on heavy lifting."
  },
  "isItCorrectForYou": [
    "You have a large, complicated, or recurrent hernia.",
    "You are not suitable for laparoscopic (keyhole) surgery.",
    "You prefer or require a surgery that can be performed under local or regional anesthesia.",
    "You have an inguinal, femoral, umbilical, incisional, or ventral hernia needing repair."
  ],
  "benefits": [
    "Effective for repairing large, complex, or recurrent hernias.",
    "Can be performed under local anesthesia in select cases.",
    "Provides direct visualization of the hernia and abdominal wall.",
    "Long-standing and proven surgical technique."
  ],
  "challenges": [
    "Larger incision means more pain and slower recovery compared to laparoscopic surgery.",
    "Possible risks include bleeding, infection, or nerve injury.",
    "Hernia recurrence is possible, though reduced with mesh reinforcement.",
    "Requires careful post-operative care and activity restrictions for several weeks."
  ]
}
,
      {
  "slug": "laparoscopic-hiatus-hernia-and-rare-hernias",
  "name": "Laparoscopic Hiatus Hernia Surgery & Other Rare Hernia Repairs",
  "description": "Hiatus hernias occur when part of the stomach pushes through the diaphragm into the chest cavity, often causing reflux and swallowing difficulties. Laparoscopic repair is the preferred method as it is minimally invasive, offering faster recovery, less pain, and better outcomes. Other rare hernias, such as femoral, parastomal, obturator, and Spigelian hernias, also benefit from advanced laparoscopic techniques.",
  "details": {
    "whenNeeded": "Performed when a hiatus hernia causes severe acid reflux, heartburn, or swallowing problems, or when rare hernias lead to pain, bulging, or risk of complications.",
    "preparation": "Diagnostic imaging (endoscopy, CT scan, or barium swallow), fasting for 6–8 hours before surgery, and pre-operative clearance depending on health status.",
    "rehabilitation": "Most patients are discharged within 1–3 days. Full recovery typically takes 2–4 weeks, with restrictions on heavy lifting and gradual return to normal activities."
  },
  "isItCorrectForYou": [
    "You have persistent reflux, heartburn, or difficulty swallowing due to a hiatus hernia.",
    "You have a rare hernia (femoral, parastomal, obturator, or Spigelian) that causes symptoms or risk of complications.",
    "Lifestyle changes or medications have not improved your symptoms.",
    "You prefer a minimally invasive option with faster recovery."
  ],
  "benefits": [
    "Smaller incisions with minimal scarring.",
    "Reduced postoperative pain and quicker return to daily life.",
    "Shorter hospital stay (usually 1–3 days).",
    "Lower risk of infection and wound complications compared to open surgery.",
    "Ability to diagnose and repair multiple hernias at the same time."
  ],
  "challenges": [
    "Requires general anesthesia.",
    "Risk of complications such as bleeding, infection, or recurrence.",
    "Some patients may experience temporary difficulty swallowing after fundoplication.",
    "Complex rare hernias may need highly specialized surgical expertise."
  ],
  "typesOfRareHerniasTreated": [
    "Femoral Hernia – occurs below the groin crease, more common in women.",
    "Parastomal Hernia – develops around a stoma site.",
    "Obturator Hernia – rare pelvic hernia, often in elderly women.",
    "Spigelian Hernia – defect along the abdominal wall semilunar line."
  ]
}

    ]
  },
  {
  id: 4,
  category: "piles-fissure-fistula-treatments",
  name: "Piles, Fissure & Fistula Treatments",
  description: "Piles (hemorrhoids), anal fissures, and anal fistulas are common anorectal conditions that cause discomfort, pain, bleeding, and affect the quality of life. These conditions can be managed effectively through a combination of lifestyle changes, medical treatments, and surgical interventions depending on severity. Our center offers comprehensive care for all grades of piles, chronic fissures, and fistulas, utilizing the latest minimally invasive techniques such as laser surgery and stapler hemorrhoidectomy to ensure optimal outcomes with minimal downtime.",
  subSurgeries: [
    {
  "slug": "laser-piles-surgery",
  "name": "Laser Piles Surgery (Laser Hemorrhoidoplasty)",
  "description": "Laser piles surgery is a modern, minimally invasive treatment for hemorrhoids (piles). It uses precise laser energy to shrink hemorrhoidal tissues while preserving surrounding healthy tissue. The procedure is designed to reduce pain, speed up recovery, and lower the risk of complications compared to traditional surgery.",
  "details": {
    "whenNeeded": "Recommended for Grade II–IV hemorrhoids, especially when conservative treatments fail or symptoms recur.",
    "preparation": "General or local anesthesia may be used. Patients should fast for 6–8 hours before surgery and follow the surgeon’s preoperative instructions.",
    "rehabilitation": "Same-day discharge in most cases. Mild soreness for a few days, with full recovery and return to routine activities typically within 3–7 days."
  },
  "isItCorrectForYou": [
    "You have Grade II–IV hemorrhoids causing pain, bleeding, or discomfort.",
    "Conservative treatments (diet, medicines, topical ointments) have not provided relief.",
    "You want a less painful and faster recovery alternative to traditional hemorrhoid surgery."
  ],
  "benefits": [
    "Minimally invasive with no large cuts.",
    "Less postoperative pain compared to conventional surgery.",
    "Reduced bleeding and quicker healing.",
    "Short procedure (30–60 minutes) with same-day discharge.",
    "Fast return to daily life, usually within a few days.",
    "Low recurrence rates with good long-term results."
  ],
  "challenges": [
    "Possible mild discomfort or soreness after surgery.",
    "Rare complications such as bleeding, infection, or recurrence.",
    "Not suitable for all patients (e.g., those with very advanced hemorrhoids may still need conventional surgery).",
    "Requires follow-up visits to ensure proper healing."
  ]
}
,
    {
  "slug": "stapler-hemorrhoidectomy",
  "name": "Stapler Hemorrhoidectomy (Stapled Hemorrhoidopexy)",
  "description": "Stapler hemorrhoidectomy, also called stapled hemorrhoidopexy or the Longo procedure, is a minimally invasive surgery designed to treat prolapsed internal hemorrhoids (Grade III and IV). Instead of removing hemorrhoids, it repositions them by removing excess tissue and stapling them back into their normal position, helping restore blood flow and reduce swelling.",
  "details": {
    "whenNeeded": "Performed for Grade III–IV internal hemorrhoids, especially when prolapse occurs or when conservative treatments have failed.",
    "preparation": "May require bowel preparation, fasting for 6–8 hours before surgery, and preoperative assessment as advised by the surgeon.",
    "rehabilitation": "Most patients return to daily activities within 1–2 weeks. Same-day or next-day discharge is common. Sitz baths, pain relief, and a high-fiber diet support recovery."
  },
  "isItCorrectForYou": [
    "You have prolapsed internal hemorrhoids (Grade III or IV).",
    "Conservative treatments have not improved your symptoms.",
    "You prefer a less painful surgical option with quicker recovery."
  ],
  "benefits": [
    "Significantly less pain compared to traditional hemorrhoidectomy.",
    "Minimal bleeding, swelling, and itching after surgery.",
    "Faster recovery, often with same-day or 24-hour discharge.",
    "Better cosmetic results since no cuts are made in the sensitive perianal skin.",
    "Lower risk of complications like anal stenosis or incontinence compared to conventional surgery."
  ],
  "challenges": [
    "Possible risks include bleeding, infection, or recurrence of hemorrhoids.",
    "Staple line complications or rare severe pain may occur.",
    "Patients may pass staples in bowel movements, which is usually harmless.",
    "Requires an experienced colorectal surgeon for best outcomes."
  ]
}
,
    {
  "slug": "fissure-surgery",
  "name": "Fissure Surgery (Laser / Open)",
  "description": "Fissure surgery is performed to treat painful anal fissures (tears in the lining of the anus) when conservative treatments fail. It can be done using modern minimally invasive laser techniques or traditional open surgery (lateral internal sphincterotomy), both aimed at reducing muscle spasm, promoting healing, and relieving pain.",
  "details": {
    "whenNeeded": "Recommended when chronic anal fissures cause persistent pain, bleeding, or difficulty passing stools, and do not heal with medications, sitz baths, or dietary changes.",
    "preparation": "Preoperative evaluation may include blood tests. Patients are advised to fast for 6–8 hours before surgery and follow bowel preparation if instructed by the surgeon.",
    "rehabilitation": "Laser surgery usually allows return to daily activities within 2–3 days, while open surgery may take 4–6 weeks for full recovery. Sitz baths, stool softeners, and a high-fiber diet are essential for healing."
  },
  "isItCorrectForYou": [
    "You have chronic fissures not responding to conservative treatment.",
    "You experience severe pain or bleeding during bowel movements.",
    "You want definitive relief and better quality of life."
  ],
  "benefits": [
    "Laser surgery offers less pain, minimal bleeding, and quicker recovery.",
    "Open surgery provides long-term healing for complicated or chronic fissures.",
    "Both methods are highly effective with excellent success rates.",
    "Outpatient option with short hospital stay (usually less than 24 hours for laser)."
  ],
  "challenges": [
    "Laser surgery may not be suitable for very severe or complicated fissures.",
    "Open surgery may cause more postoperative pain and longer recovery.",
    "Possible complications include infection, recurrence, or rare risk of anal stenosis.",
    "Requires strict postoperative care including diet, hydration, and sitz baths."
  ]
}
,
    {
  "slug": "fistula-surgery",
  "name": "Fistula Surgery (Laser / Fistulectomy / Fistulotomy)",
  "description": "Fistula surgery is performed to treat anal fistulas, which are abnormal tunnels between the anal canal and the skin near the anus. Since fistulas rarely heal on their own and can cause persistent drainage, pain, or recurrent infections, surgery is often necessary. Multiple techniques are available depending on the complexity of the fistula, with the goal of healing while preserving bowel control.",
  "details": {
    "whenNeeded": "Performed when an anal fistula causes persistent symptoms like pain, drainage, or infection, and does not heal with conservative measures.",
    "preparation": "Preoperative evaluation includes clinical examination and imaging (MRI or ultrasound). Patients are usually advised to fast for 6–8 hours before surgery.",
    "rehabilitation": "Most procedures are outpatient or require a short hospital stay. Recovery may take 2–6 weeks depending on the technique. Sitz baths, wound care, and pain management are important during healing."
  },
  "isItCorrectForYou": [
    "You have recurrent anal abscesses or persistent fistula drainage.",
    "You are experiencing pain, swelling, or recurrent infections due to a fistula.",
    "Your fistula has not healed with medications or minor procedures."
  ],
  "benefits": [
    "Laser surgery offers a minimally invasive option with less pain and quicker recovery.",
    "Fistulotomy provides high success rates for simple fistulas.",
    "Fistulectomy ensures complete removal of the fistula tract in complex or recurrent cases.",
    "Multiple sphincter-sparing techniques are available for complex fistulas."
  ],
  "challenges": [
    "Healing may take several weeks, requiring regular wound care.",
    "Risk of recurrence, especially in complex fistulas.",
    "Some techniques may affect sphincter muscles if not performed carefully, rarely leading to bowel control issues.",
    "Possible complications include infection, bleeding, or delayed healing."
  ]
}
,
    {
  "slug": "pilonidal-sinus-surgery",
  "name": "Pilonidal Sinus Surgery",
  "description": "Pilonidal sinus surgery is performed to treat a cyst or abscess that develops near the buttock cleft, often containing hair and debris that cause pain and infection. Surgery becomes necessary when conservative treatments fail, with the goal of removing the sinus tract and preventing recurrence. Various surgical techniques are available, ranging from minimally invasive options to flap procedures for complex cases.",
  "details": {
    "whenNeeded": "Recommended when pilonidal sinus causes recurrent infection, persistent pain, or does not heal with conservative treatments.",
    "preparation": "Preoperative evaluation may include clinical examination and imaging. Patients are advised to maintain good hygiene and shave or remove hair in the affected area before surgery.",
    "rehabilitation": "Recovery depends on the surgical method: laser or endoscopic techniques allow return to activities within a few days, while open excision or flap surgeries may require 2–6 weeks with regular wound care."
  },
  "isItCorrectForYou": [
    "You have a painful or recurrent pilonidal sinus that causes infection or abscess formation.",
    "Conservative treatments have not resolved your symptoms.",
    "You prefer a surgical option that minimizes recurrence and promotes long-term healing."
  ],
  "benefits": [
    "Laser and endoscopic procedures are minimally invasive with faster recovery and minimal scarring.",
    "Flap procedures like Karydakis or Limberg reduce recurrence and improve cosmetic outcomes in complex cases.",
    "Wide excision ensures complete removal of the sinus and reduces infection risk.",
    "Modern techniques allow shorter downtime and quicker return to normal activities."
  ],
  "challenges": [
    "Open excision may require prolonged healing and frequent dressing changes.",
    "Risk of recurrence, especially in deep clefts or complex sinuses.",
    "Some procedures require advanced surgical expertise.",
    "Possible complications include infection, bleeding, or delayed wound healing."
  ]
}
,
    {
  "slug": "drainage-perianal-perineal-abscess",
  "name": "Drainage of Perianal & Perineal Abscess",
  "description": "Surgical drainage is the primary treatment for perianal and perineal abscesses, which are collections of pus caused by infection near the anus or perineum. This procedure relieves pain, reduces swelling, and prevents complications such as fistula formation or systemic infection.",
  "details": {
    "whenNeeded": "Performed when an abscess forms near the anus or perineum, causing pain, swelling, or fever.",
    "preparation": "Assessment with physical examination; in some cases, imaging (ultrasound/MRI) may be needed. Patients are advised to fast for a few hours before surgery depending on anesthesia type.",
    "rehabilitation": "Recovery is usually quick, with pain and swelling subsiding in a few days. Full wound healing may take 2–3 weeks with proper wound care."
  },
  "isItCorrectForYou": [
    "You have painful swelling or redness near the anus or perineum.",
    "You experience fever or systemic symptoms due to infection.",
    "The abscess does not resolve with antibiotics alone.",
    "You are at risk of complications like fistula formation if untreated."
  ],
  "benefits": [
    "Provides immediate relief from pain and pressure.",
    "Prevents spread of infection and systemic illness.",
    "Simple and effective procedure with high success rates."
  ],
  "challenges": [
    "Requires wound care and dressing changes until healed.",
    "Risk of recurrence or fistula formation in some patients.",
    "Temporary discomfort, swelling, or discharge may persist."
  ]
}

  ]
},
{
  id: 5,
  category: "abdominal-surgeries",
  name: "Abdominal Surgeries",
  description: "Our specialized abdominal surgery center offers advanced surgical care for a wide range of abdominal conditions. Whether it is minimally invasive laparoscopic procedures or open surgeries, we provide tailored treatments with the highest standards of safety and patient comfort.Our expert surgeons handle complex cases involving the digestive system, abdominal organs, hernias, tumors, and other abdominal diseases. We use cutting-edge technology and evidence-based approaches to ensure successful outcomes and faster recovery for our patients.",
  subSurgeries: [
    {
  "slug": "exploratory-laparotomy",
  "name": "Exploratory Laparotomy",
  "description": "Exploratory laparotomy is a major surgical procedure where a large incision is made in the abdomen to allow the surgeon direct access to the abdominal cavity for diagnosis and treatment. It is typically performed when tests cannot determine the cause of abdominal pain, bleeding, or injury, or in emergency situations.",
  "details": {
    "whenNeeded": "Performed when the cause of abdominal pain, bleeding, or injury is unclear, or in emergencies such as trauma or acute abdomen.",
    "preparation": "General anesthesia is required. You may need blood tests, imaging scans, and fasting 6–8 hours before surgery.",
    "rehabilitation": "Recovery usually involves several days in the hospital. Full recovery may take 4–6 weeks, depending on the findings and treatment performed."
  },
  "isItCorrectForYou": [
    "You have severe abdominal pain with unclear cause.",
    "Diagnostic tests (ultrasound, CT, MRI) have not given a clear answer.",
    "You have sustained trauma or an abdominal emergency requiring immediate surgery."
  ],
  "benefits": [
    "Provides direct access to abdominal organs for accurate diagnosis.",
    "Allows immediate treatment of underlying problems (repair, biopsy, removal).",
    "Life-saving in emergency conditions."
  ],
  "challenges": [
    "Large incision leading to longer recovery and scarring.",
    "Risks of bleeding, infection, or injury to abdominal organs.",
    "Longer hospital stay compared to minimally invasive procedures."
  ]
}
,
    {
  "slug": "diagnostic-laparoscopy",
  "name": "Diagnostic Laparoscopy",
  "description": "Diagnostic laparoscopy is a minimally invasive surgical procedure that allows the surgeon to directly visualize the inside of the abdomen and pelvis. It helps identify abnormalities that may not be visible through imaging tests like ultrasound, CT scan, or MRI, making it valuable for accurate diagnosis and treatment planning.",
  "details": {
    "whenNeeded": "Performed when persistent abdominal or pelvic pain, swelling, or suspected conditions cannot be explained by other diagnostic tests.",
    "preparation": "Preoperative evaluation, blood tests or imaging, and fasting 6–8 hours before surgery. General anesthesia is typically required.",
    "rehabilitation": "Most patients return home the same day or within 24 hours. Recovery is usually within 1 week, with follow-up for biopsy results if taken."
  },
  "isItCorrectForYou": [
    "You have unexplained abdominal or pelvic pain.",
    "You have suspected tumors, adhesions, infections, or endometriosis.",
    "You are being evaluated for infertility or staging of cancer.",
    "Other diagnostic tests have not provided clear results."
  ],
  "benefits": [
    "Provides direct and detailed visualization of abdominal and pelvic organs.",
    "Allows biopsy or minor interventions during the same procedure.",
    "Minimally invasive with small incisions and quicker recovery.",
    "Helps avoid unnecessary open surgery."
  ],
  "challenges": [
    "Possible risks of bleeding, infection, or injury to internal organs.",
    "Temporary abdominal or shoulder pain from gas used during the procedure.",
    "Requires general anesthesia.",
    "May require further surgery if significant findings are discovered."
  ]
}
,
    {
  "slug": "intestinal-obstruction-surgery",
  "name": "Intestinal Obstruction Surgery",
  "description": "Intestinal obstruction surgery is performed to relieve a blockage in the intestines that prevents the normal passage of food and waste. This condition can cause severe abdominal pain, vomiting, swelling, and constipation, and may become life-threatening if untreated. Surgery helps restore intestinal function when non-surgical treatments are not effective or when the bowel is damaged.",
  "details": {
    "whenNeeded": "Performed for complete intestinal blockage, persistent obstruction despite conservative treatment, or when there are signs of bowel damage such as ischemia, perforation, or infection.",
    "preparation": "Preoperative evaluation including blood tests, imaging (X-ray, CT scan), IV fluids, and fasting before surgery. General anesthesia is required.",
    "rehabilitation": "Hospital stay usually 5–10 days depending on surgery type. Full recovery may take 4–6 weeks, with gradual return to normal diet and activity."
  },
  "isItCorrectForYou": [
    "You have severe abdominal pain, vomiting, or constipation due to a bowel blockage.",
    "Conservative treatments such as bowel rest and decompression have failed.",
    "You have complications like bowel ischemia, perforation, or suspected tumors/hernias.",
    "Your doctor recommends surgery after imaging or clinical evaluation."
  ],
  "benefits": [
    "Restores normal intestinal function and relieves obstruction.",
    "Prevents life-threatening complications such as bowel perforation or infection.",
    "Different surgical options tailored to the cause of obstruction.",
    "Can be life-saving in emergency cases."
  ],
  "challenges": [
    "Risks of bleeding, infection, or leakage from bowel connections (anastomosis).",
    "Possible need for a temporary stoma (colostomy or ileostomy).",
    "Recovery may take several weeks with dietary and activity restrictions.",
    "Risk of recurrence, especially in cases of adhesions or underlying disease."
  ]
}
,
    {
  "slug": "bowel-resection-anastomosis",
  "name": "Bowel Resection & Anastomosis",
  "description": "Bowel resection and anastomosis is a surgical procedure where a diseased or damaged portion of the intestine is removed and the healthy ends are reconnected. This restores normal bowel continuity and function. It may be required for conditions such as bowel obstruction, cancer, inflammatory bowel disease, diverticulitis, ischemia, or traumatic injury.",
  "details": {
    "whenNeeded": "Performed when part of the bowel is blocked, damaged, inflamed, or affected by conditions such as tumors, diverticulitis, Crohn’s disease, ischemia, or severe injury.",
    "preparation": "Preoperative evaluation with blood tests, imaging, and bowel preparation (if planned). Fasting for several hours before surgery. General anesthesia is required.",
    "rehabilitation": "Hospital stay is usually 5–7 days. Oral intake resumes gradually once bowel function returns. Full recovery may take 4–6 weeks with gradual return to normal diet and daily activities."
  },
  "isItCorrectForYou": [
    "You have a bowel obstruction not relieved by conservative treatment.",
    "You are diagnosed with colorectal cancer or large polyps requiring removal.",
    "You have recurrent diverticulitis, Crohn’s disease, or ulcerative colitis affecting the intestine.",
    "You have bowel ischemia, perforation, or traumatic injury requiring surgical removal."
  ],
  "benefits": [
    "Removes diseased or damaged bowel tissue, preventing further complications.",
    "Restores normal intestinal continuity and function.",
    "Can relieve pain, obstruction, or bleeding caused by bowel disease.",
    "Improved long-term outcomes with modern surgical techniques and care."
  ],
  "challenges": [
    "Risks include bleeding, infection, leakage from the bowel connection (anastomotic leak).",
    "Recovery may require temporary dietary adjustments and activity restrictions.",
    "In some cases, a temporary stoma (colostomy or ileostomy) may be necessary.",
    "Possibility of bowel obstruction or narrowing at the anastomosis site in the future."
  ]
}
,
    {
  "slug": "perforation-peritonitis-surgery",
  "name": "Perforation Peritonitis Surgery",
  "description": "Perforation peritonitis surgery is a life-saving emergency procedure performed when a hollow organ in the abdomen ruptures, causing leakage of intestinal contents into the abdominal cavity. This results in peritonitis, a severe infection that can quickly become life-threatening if not treated promptly.",
  "details": {
    "whenNeeded": "Performed in cases of organ perforation causing peritonitis, often due to peptic ulcer, appendicitis, diverticulitis, trauma, cancer, or infection.",
    "preparation": "Immediate stabilization with IV fluids, antibiotics, and monitoring. Surgery is usually performed as an emergency under general anesthesia.",
    "rehabilitation": "Hospital stay often lasts 7–10 days or longer depending on severity. Recovery involves antibiotics, nutritional support, and gradual return to activity over 4–6 weeks."
  },
  "isItCorrectForYou": [
    "You have sudden severe abdominal pain with signs of peritonitis (rigid, tender abdomen).",
    "You are diagnosed with perforated ulcer, appendix, or bowel condition.",
    "You have infection signs such as fever, rapid heart rate, or low blood pressure.",
    "Non-surgical management is not an option due to life-threatening sepsis risk."
  ],
  "benefits": [
    "Removes the source of infection and contamination from the abdominal cavity.",
    "Reduces risk of severe sepsis and multi-organ failure.",
    "Allows repair or removal of the diseased organ segment.",
    "Life-saving intervention when performed urgently."
  ],
  "challenges": [
    "High-risk emergency surgery with increased chances of complications.",
    "Possible wound infection, leakage, abscess formation, or sepsis post-surgery.",
    "Longer hospital stay and intensive monitoring may be required.",
    "Recovery may be slow, especially in elderly or critically ill patients."
  ]
}
,
    {
  "slug": "adhesiolysis",
  "name": "Adhesiolysis (Release of Abdominal Adhesions)",
  "description": "Adhesiolysis is a surgical procedure to remove or separate scar tissue (adhesions) that form between abdominal organs and tissues, often after surgery, infection, or inflammation. While many adhesions cause no issues, some can lead to abdominal pain, bowel obstruction, or infertility, making surgery necessary to restore normal organ function.",
  "details": {
    "whenNeeded": "Performed when adhesions cause persistent abdominal pain, bowel obstruction, or infertility, especially if non-surgical treatments have failed.",
    "preparation": "Clinical evaluation and imaging to confirm adhesions; fasting 6–8 hours before surgery; preoperative stabilization if obstruction is present.",
    "rehabilitation": "Hospital stay usually 1–3 days for laparoscopic surgery and longer for open surgery; gradual return to diet and activities within 1–2 weeks; complete recovery may take several weeks."
  },
  "isItCorrectForYou": [
    "You have chronic or severe abdominal pain from adhesions.",
    "You experience recurrent bowel obstruction symptoms like cramping, nausea, or vomiting.",
    "You are facing infertility due to pelvic or abdominal adhesions.",
    "Other medical management options have not provided relief."
  ],
  "benefits": [
    "Relieves abdominal pain and discomfort caused by adhesions.",
    "Restores normal bowel function and reduces risk of obstruction.",
    "Improves fertility outcomes when reproductive organs are involved.",
    "Laparoscopic approach offers faster recovery, less pain, and minimal scarring."
  ],
  "challenges": [
    "Adhesions can recur even after surgery.",
    "Risk of bowel injury, bleeding, or infection during the procedure.",
    "Open adhesiolysis may involve longer recovery and larger scars compared to laparoscopy.",
    "General anesthesia is required, carrying its own risks."
  ]
}

  ]
},
{
  id: 6,
  category: "bariatric-obesity-surgeries",
  name: "Bariatric & Obesity Surgeries",
  description: "Bariatric surgery is a specialized set of surgical procedures aimed at helping individuals with obesity achieve significant and sustained weight loss. These surgeries not only reduce excess body weight but also improve or resolve obesity-related health conditions such as diabetes, hypertension, sleep apnea, and joint pain, thereby enhancing quality of life. Our center offers a comprehensive range of bariatric procedures, including laparoscopic sleeve gastrectomy, gastric bypass, mini-gastric bypass, and revision surgeries. Each procedure is tailored to the patient's unique health profile and weight loss goals, ensuring optimal outcomes with a focus on safety, long-term success, and holistic care.",
  subSurgeries: [
    {
  "slug": "laparoscopic-sleeve-gastrectomy",
  "name": "Laparoscopic Sleeve Gastrectomy (Weight-loss surgery)",
  "description": "Laparoscopic sleeve gastrectomy is a minimally invasive bariatric surgery that reduces the size of the stomach to a narrow tube or 'sleeve.' This limits food intake and decreases hunger by lowering the production of the hunger hormone ghrelin. It is one of the most widely performed procedures for severe obesity due to its effectiveness and safety profile.",
  "details": {
    "whenNeeded": "Recommended for individuals with severe obesity (BMI ≥ 40, or ≥ 35 with obesity-related conditions) who have not achieved adequate weight loss with lifestyle or medical treatments.",
    "preparation": "Preoperative evaluation includes medical, nutritional, and psychological assessments. Patients are often placed on a pre-surgery diet to reduce liver size. Fasting 8 hours before surgery is required.",
    "rehabilitation": "Hospital stay is usually 1–3 days. Full recovery takes 2–4 weeks. Patients must follow a staged diet (liquids, soft foods, then solids) and commit to long-term lifestyle changes for best results."
  },
  "isItCorrectForYou": [
    "You are living with severe obesity and conservative measures have not worked.",
    "You have obesity-related health issues such as diabetes, hypertension, or sleep apnea.",
    "You are motivated to commit to long-term dietary, physical activity, and lifestyle changes.",
    "You do not have untreated psychiatric illness or contraindications to major surgery."
  ],
  "benefits": [
    "Significant and sustained weight loss (60–70% of excess weight).",
    "Reduces appetite and hunger due to hormonal changes.",
    "Improves or resolves conditions like type 2 diabetes, hypertension, and sleep apnea.",
    "No intestinal rerouting, lowering the risk of nutrient malabsorption.",
    "Minimally invasive approach with smaller incisions, less pain, and faster recovery."
  ],
  "challenges": [
    "Requires lifelong lifestyle and dietary changes for success.",
    "Risk of surgical complications such as bleeding, leakage, or infection.",
    "Possible long-term risks include heartburn, vitamin deficiencies, or weight regain if habits are not maintained.",
    "General anesthesia is required, carrying its own risks."
  ]
}
,
    {
  "slug": "laparoscopic-gastric-bypass",
  "name": "Laparoscopic Gastric Bypass (Roux-en-Y)",
  "description": "Laparoscopic Roux-en-Y gastric bypass is a minimally invasive bariatric surgery that reduces stomach size and reroutes part of the small intestine. This combination limits food intake, decreases calorie absorption, and triggers beneficial hormonal changes that reduce hunger and improve metabolism. It is one of the most effective weight-loss surgeries worldwide.",
  "details": {
    "whenNeeded": "Recommended for people with severe obesity (BMI ≥ 40, or ≥ 35 with obesity-related conditions like diabetes, hypertension, or sleep apnea) when other methods have failed.",
    "preparation": "Comprehensive evaluation including blood tests, nutritional and psychological assessments, and a pre-surgery diet to shrink the liver. Fasting 8 hours before surgery is required.",
    "rehabilitation": "Hospital stay is usually 2–3 days. Gradual recovery with staged diet (liquids → soft foods → solids) over several weeks. Full recovery typically within 3–4 weeks, with lifelong follow-ups."
  },
  "isItCorrectForYou": [
    "You have severe obesity and lifestyle or medical treatments have not worked.",
    "You are living with health conditions like type 2 diabetes, high blood pressure, or sleep apnea.",
    "You are committed to lifelong lifestyle changes, vitamin supplementation, and regular medical check-ups."
  ],
  "benefits": [
    "Significant weight loss (60–80% of excess weight within 12–18 months).",
    "Improves or resolves obesity-related conditions such as diabetes, hypertension, and sleep apnea.",
    "Reduces long-term risks of heart disease and stroke.",
    "Hormonal changes decrease hunger and improve blood sugar control.",
    "Minimally invasive approach with quicker recovery compared to open surgery."
  ],
  "challenges": [
    "Requires lifelong commitment to diet, exercise, and supplements.",
    "Risk of surgical complications like leaks, infections, or bowel obstruction.",
    "Possible nutritional deficiencies (iron, calcium, vitamin B12, folate).",
    "Dumping syndrome may occur, causing nausea, dizziness, or diarrhea after certain foods.",
    "General anesthesia is required, which carries its own risks."
  ]
}
,
    {
  "slug": "mini-gastric-bypass",
  "name": "Mini Gastric Bypass (One Anastomosis Gastric Bypass)",
  "description": "Mini gastric bypass, also known as one anastomosis gastric bypass or omega loop gastric bypass, is a minimally invasive bariatric surgery designed to achieve significant weight loss and improve obesity-related health conditions. It is a simpler and quicker alternative to the traditional Roux-en-Y gastric bypass, involving only one surgical connection.",
  "details": {
    "whenNeeded": "Recommended for people with severe obesity (BMI ≥ 40, or ≥ 35 with obesity-related conditions like diabetes, hypertension, or sleep apnea) when lifestyle and medical treatments have not worked.",
    "preparation": "Comprehensive pre-surgery evaluation including blood tests, nutritional and psychological assessment, and a liver-shrinking diet. Fasting 6–8 hours before surgery is required.",
    "rehabilitation": "Hospital stay is usually 1–3 days. Patients follow a staged diet (liquids → pureed → solids) over several weeks. Full recovery takes 3–4 weeks, with long-term follow-up for monitoring."
  },
  "isItCorrectForYou": [
    "You have severe obesity and other weight-loss methods have failed.",
    "You have health issues related to obesity, such as type 2 diabetes, high blood pressure, or sleep apnea.",
    "You are prepared for lifelong dietary changes, supplements, and regular medical check-ups."
  ],
  "benefits": [
    "Significant and sustained weight loss, comparable or even superior to other bariatric surgeries.",
    "Shorter operative time and hospital stay compared to Roux-en-Y gastric bypass.",
    "Single surgical connection lowers the risk of leaks and complications.",
    "Improves or resolves conditions like diabetes, hypertension, and other metabolic disorders.",
    "Minimally invasive with small incisions, less pain, and faster recovery.",
    "Can be reversed or revised if necessary."
  ],
  "challenges": [
    "Possible bile reflux, which may cause discomfort in some patients.",
    "Risk of marginal ulcers and nutritional deficiencies.",
    "Lifelong commitment to dietary changes and vitamin/mineral supplementation is required.",
    "General surgical risks such as bleeding, infection, or anesthesia-related complications.",
    "Less long-term data compared to Roux-en-Y gastric bypass."
  ]
}
,
    {
  "slug": "revision-bariatric-surgeries",
  "name": "Revision Bariatric Surgeries",
  "description": "Revision bariatric surgery refers to follow-up procedures performed on patients who have previously undergone bariatric surgery but need additional intervention. This may be due to inadequate weight loss, weight regain, complications, or unresolved obesity-related health issues. Revisional surgeries aim to improve effectiveness, correct complications, or, in some cases, reverse the original surgery.",
  "details": {
    "whenNeeded": "Considered when there is insufficient weight loss, weight regain, persistent health issues (like diabetes or hypertension), complications (such as pouch dilation, band slippage, or fistulas), or intolerable side effects (like severe reflux or malnutrition).",
    "preparation": "Comprehensive pre-surgery evaluation including nutritional assessment, imaging, and endoscopic studies. Patients must follow pre-op dietary and medical instructions provided by the surgical team.",
    "rehabilitation": "Recovery varies depending on the type of revision. Most procedures are laparoscopic, allowing for shorter hospital stays. Post-op care includes pain control, gradual diet progression, and close monitoring of nutrition."
  },
  "isItCorrectForYou": [
    "You had bariatric surgery but did not achieve expected weight loss or regained weight.",
    "You are experiencing complications from your previous surgery, such as reflux, pouch dilation, or band slippage.",
    "You have persistent obesity-related health problems despite your prior surgery.",
    "You are motivated to commit to ongoing dietary, lifestyle, and medical follow-ups."
  ],
  "benefits": [
    "Improved long-term weight loss outcomes when the initial surgery was unsuccessful.",
    "Resolution or improvement of complications caused by the first surgery.",
    "Better management of obesity-related health conditions like diabetes or hypertension.",
    "Ability to reverse certain surgeries if intolerable side effects occur.",
    "Often performed laparoscopically, which reduces recovery time."
  ],
  "challenges": [
    "Revision surgeries are technically more complex than primary bariatric procedures.",
    "Higher risks compared to first-time surgery, including leaks, bleeding, or infection.",
    "Possibility of nutritional deficiencies requiring lifelong supplements.",
    "Recovery may take longer depending on the extent of revision.",
    "Requires strong commitment to lifestyle changes and consistent medical follow-ups."
  ]
}

  ]
},
{
  id: 7,
  category: "breast-surgeries",
  name: "Breast Surgeries",
  description: "Breast surgeries encompass a wide range of procedures aimed at diagnosing, treating, and reconstructing breast conditions. These surgeries are performed for both benign and malignant diseases, as well as for cosmetic and reconstructive purposes. Our specialized breast surgery unit offers expert care using advanced surgical techniques to ensure optimal outcomes, functional preservation, and aesthetic satisfaction.",
  subSurgeries: [
    {
  "slug": "breast-lump-removal-lumpectomy",
  "name": "Breast Lump Removal (Lumpectomy)",
  "description": "A lumpectomy, also called breast-conserving surgery or partial mastectomy, is a surgical procedure to remove a lump or tumor from the breast while preserving as much healthy breast tissue as possible. It is commonly performed to treat early-stage breast cancer or benign breast lumps.",
  "details": {
    "whenNeeded": "Performed when a patient has early-stage breast cancer or benign lumps that need removal while conserving the breast.",
    "preparation": "General anesthesia is usually given. Fasting may be required before surgery. Pre-operative imaging and biopsy are often done.",
    "rehabilitation": "Most patients recover within 1-2 weeks. Radiation therapy may be advised afterward. Regular follow-ups are necessary."
  },
  "isItCorrectForYou": [
    "You have a breast lump (benign or malignant) that needs surgical removal.",
    "You are diagnosed with early-stage breast cancer where breast conservation is possible.",
    "You prefer to preserve the breast instead of undergoing mastectomy."
  ],
  "benefits": [
    "Preserves most of the breast tissue and maintains natural appearance.",
    "Less invasive than full breast removal (mastectomy).",
    "Comparable survival rates to mastectomy when combined with radiation.",
    "Shorter recovery time and fewer complications."
  ],
  "challenges": [
    "Risk of pain, swelling, or infection at the incision site.",
    "Possible need for additional surgery if margins are not clear.",
    "Radiation therapy is usually required after the procedure.",
    "Small changes in breast shape or scarring may occur."
  ]
}
,
    {
  "slug": "modified-radical-mastectomy",
  "name": "Modified Radical Mastectomy (Breast Cancer Surgery)",
  "description": "Modified Radical Mastectomy (MRM) is a surgical procedure for treating breast cancer. It involves removing the entire breast tissue along with the nipple-areola complex and most of the underarm lymph nodes, while preserving the chest muscles for better recovery and function.",
  "details": {
    "whenNeeded": "Performed when breast cancer requires complete removal of breast tissue along with lymph nodes to prevent cancer spread.",
    "preparation": "Preoperative imaging, biopsy, staging investigations, fasting before surgery, and consultation with the oncology team.",
    "rehabilitation": "Hospital stay is usually 1–3 days. Drains may remain for 1–2 weeks. Physical therapy helps prevent stiffness and swelling. Full recovery may take several weeks."
  },
  "isItCorrectForYou": [
    "You have been diagnosed with breast cancer requiring surgical removal.",
    "Lump removal alone (lumpectomy) is not sufficient for your cancer stage.",
    "You are medically fit to undergo major surgery under general anesthesia."
  ],
  "benefits": [
    "Effective removal of cancerous breast tissue and lymph nodes.",
    "Preserves chest muscles for better arm and shoulder movement.",
    "Helps guide further treatment through pathological analysis.",
    "Lower recurrence rates when combined with chemotherapy or radiation."
  ],
  "challenges": [
    "Risk of complications such as lymphedema (arm swelling), infection, or seroma (fluid build-up).",
    "Possible numbness or nerve injury in the chest or arm.",
    "Longer recovery compared to breast-conserving surgery.",
    "Permanent loss of the breast, which may affect body image and emotional health."
  ]
}
,
    {
  "slug": "gynecomastia-surgery",
  "name": "Gynecomastia Surgery (Male Breast Reduction)",
  "description": "Gynecomastia surgery is a procedure designed to reduce enlarged male breasts caused by excess glandular tissue, fat, or skin. It helps restore a flatter, firmer, and more masculine chest contour, improving comfort and self-confidence.",
  "details": {
    "whenNeeded": "Performed when enlarged male breasts cause physical discomfort, self-consciousness, or emotional distress, and non-surgical options are ineffective.",
    "preparation": "Medical evaluation including hormonal tests, review of medications, and lifestyle assessment. Stop smoking and avoid certain medications as advised. Fasting is required if general anesthesia is planned.",
    "rehabilitation": "Patients usually return home the same day. Light activities can be resumed in a few days, while strenuous exercise and heavy lifting should be avoided for 3–4 weeks. Compression garments are recommended to reduce swelling and support healing."
  },
  "isItCorrectForYou": [
    "You have enlarged male breasts due to excess glandular tissue, fat, or skin.",
    "You experience discomfort, low self-esteem, or social embarrassment from chest appearance.",
    "You are healthy and non-surgical treatments (weight loss, medication adjustment) have not resolved the condition."
  ],
  "benefits": [
    "Restores a flatter, firmer, and more masculine chest contour.",
    "Improves confidence and emotional well-being.",
    "Minimal scarring with advanced surgical techniques.",
    "Long-lasting results when combined with a healthy lifestyle."
  ],
  "challenges": [
    "Temporary pain, swelling, and bruising are common after surgery.",
    "Risk of complications such as infection, bleeding, or fluid accumulation.",
    "Possible nipple or skin sensation changes.",
    "Scarring, though usually minimal and well-concealed."
  ]
}
,
    {
  "slug": "accessory-breast-axilla-surgery",
  "name": "Accessory Breast Surgery and Axilla Surgery",
  "description": "Accessory breast tissue, often found in the armpit (axilla), is extra breast tissue that can cause discomfort, swelling, or cosmetic concerns. Surgery helps remove this tissue to improve chest and arm contour, reduce pain, and restore confidence.",
  "details": {
    "whenNeeded": "Performed when accessory breast tissue causes pain, swelling, arm movement restriction, or cosmetic concerns.",
    "preparation": "Medical evaluation, imaging if needed, and discussion of surgical options (liposuction, excision, or both). Avoid smoking and blood-thinning medications as advised. Fasting may be required if general anesthesia is planned.",
    "rehabilitation": "Most patients return home the same day. Light activities can be resumed within a few days, while heavy lifting and strenuous exercise should be avoided for 3–4 weeks. Compression garments are often recommended to support healing and reduce swelling."
  },
  "isItCorrectForYou": [
    "You have visible bulges or lumps in the armpit due to accessory breast tissue.",
    "You experience pain, swelling, or discomfort in the axilla, especially during hormonal changes.",
    "You are bothered by cosmetic appearance or restricted arm mobility.",
    "Non-surgical approaches have not improved your condition."
  ],
  "benefits": [
    "Relief from pain, swelling, and tenderness.",
    "Improved contour of the chest and armpit area.",
    "Enhanced self-confidence and body image.",
    "Minimal scarring with modern techniques.",
    "Long-lasting results when combined with healthy lifestyle."
  ],
  "challenges": [
    "Temporary bruising, swelling, or numbness in the treated area.",
    "Risk of infection, bleeding, or fluid buildup (seroma).",
    "Scarring, though usually small and well-hidden in natural creases.",
    "Need for follow-up care and possible use of compression garments."
  ]
}

  ]
},
{
  id: 8,
  category: "thyroid-neck-surgeries",
  name: "Thyroid & Neck Surgeries",
  description: "Thyroid and neck surgeries are specialized procedures performed to treat a variety of conditions affecting the thyroid gland, lymph nodes, and surrounding neck structures. These surgeries range from removing part or all of the thyroid gland to excising benign or malignant nodules, managing tumors, and addressing enlarged lymph nodes. Our center offers expert surgical care using advanced techniques to ensure optimal outcomes, minimize complications, and preserve vital functions such as voice and calcium regulation.",
  subSurgeries: [
    {
  "slug": "hemithyroidectomy",
  "name": "Hemithyroidectomy (Partial Thyroid Removal)",
  "description": "Hemithyroidectomy, also known as thyroid lobectomy or partial thyroidectomy, is a surgical procedure where one lobe of the thyroid gland and part of the isthmus are removed. It is commonly done for localized nodules, early thyroid cancers, or cosmetic reasons. Since only half of the gland is removed, many patients continue to have normal thyroid function without needing lifelong medication.",
  "details": {
    "whenNeeded": "Performed when a thyroid nodule, early thyroid cancer, or a unilateral goiter is confined to one side of the thyroid, or for cosmetic removal of visible lumps.",
    "preparation": "Thyroid function tests, ultrasound, and possibly fine needle aspiration (FNA) biopsy. Fasting 6–8 hours before surgery.",
    "rehabilitation": "Most patients return to normal activities in 1–2 weeks. Temporary hoarseness or neck discomfort may occur but usually resolve. Regular thyroid function monitoring is needed."
  },
  "isItCorrectForYou": [
    "You have a thyroid nodule or lump confined to one lobe.",
    "You are diagnosed with early-stage thyroid cancer limited to one side.",
    "You experience compressive symptoms (difficulty swallowing or breathing) from an enlarged thyroid on one side.",
    "You want removal of a visible thyroid lump for cosmetic reasons."
  ],
  "benefits": [
    "Removes problematic thyroid tissue while preserving half the gland.",
    "Lower chance of needing lifelong thyroid hormone replacement compared to total thyroidectomy.",
    "Smaller incision with minimal scarring.",
    "Quick recovery, usually within 1–2 weeks."
  ],
  "challenges": [
    "Temporary hoarseness or voice changes due to nerve irritation.",
    "Risk of injury to the recurrent laryngeal nerve or parathyroid glands.",
    "Possible need for thyroid hormone replacement if remaining gland is underactive.",
    "Small chance of recurrence or new nodules developing in the remaining lobe."
  ]
}
,
    {
  "slug": "total-thyroidectomy",
  "name": "Total Thyroidectomy (Complete Thyroid Removal)",
  "description": "Total thyroidectomy is a surgical procedure where the entire thyroid gland, including both lobes and the connecting isthmus, is removed. It is performed for thyroid cancer, large goiters, Graves’ disease, or other severe thyroid conditions. Because the whole gland is removed, lifelong thyroid hormone replacement is required.",
  "details": {
    "whenNeeded": "Performed when thyroid cancer, large or symptomatic goiters, or hyperthyroidism (like Graves’ disease) cannot be managed with medication or less extensive surgery.",
    "preparation": "Thyroid function tests, ultrasound, fine needle aspiration (FNA) for nodules, sometimes CT/MRI scans. Fasting 6–8 hours before surgery.",
    "rehabilitation": "Hospital stay of 1–3 days. Lifelong thyroid hormone replacement is required. Most patients recover in 2–3 weeks, with calcium levels monitored for safety."
  },
  "isItCorrectForYou": [
    "You have thyroid cancer requiring complete removal.",
    "You have a large goiter causing swallowing or breathing issues.",
    "You have hyperthyroidism not controlled with medicines or radioactive iodine.",
    "You have recurrent or multifocal thyroid disease affecting both lobes."
  ],
  "benefits": [
    "Removes all diseased thyroid tissue, lowering risk of recurrence.",
    "Definitive treatment for thyroid cancer and severe thyroid disorders.",
    "Improves breathing and swallowing in cases of large goiters.",
    "Provides long-term stability when other treatments have failed."
  ],
  "challenges": [
    "Requires lifelong thyroid hormone replacement.",
    "Risk of vocal cord nerve injury leading to hoarseness.",
    "Risk of hypoparathyroidism causing low calcium levels.",
    "Possible complications such as bleeding, infection, or airway compromise (rare)."
  ]
}
,
    {
  "slug": "parathyroid-surgery",
  "name": "Parathyroid Surgery (Parathyroidectomy)",
  "description": "Parathyroid surgery involves removing one or more parathyroid glands to restore normal calcium balance in the body. It is most often performed to treat hyperparathyroidism, a condition where overactive glands produce too much parathyroid hormone (PTH), leading to high calcium levels and health issues like bone weakness, kidney stones, and fatigue.",
  "details": {
    "whenNeeded": "Recommended when hyperparathyroidism causes high calcium levels, kidney stones, bone loss, or persistent symptoms, often due to a parathyroid adenoma or other gland abnormality.",
    "preparation": "Blood tests for calcium and PTH, bone density scans, imaging studies (ultrasound, sestamibi scan, or CT) to locate abnormal glands. Fasting 6–8 hours before surgery.",
    "rehabilitation": "Most patients go home the same day or within 24 hours. Normal activities can resume in a few days, with full recovery in 1–2 weeks. Calcium levels are closely monitored after surgery."
  },
  "isItCorrectForYou": [
    "You have primary hyperparathyroidism due to an overactive gland or adenoma.",
    "You experience symptoms like bone pain, kidney stones, fatigue, or cognitive issues from high calcium levels.",
    "Medical treatments for hyperparathyroidism are not effective.",
    "You have chronic kidney disease with secondary or tertiary hyperparathyroidism requiring surgery."
  ],
  "benefits": [
    "Restores normal calcium levels in the blood.",
    "Relieves symptoms such as fatigue, bone pain, and kidney problems.",
    "Reduces long-term risks like osteoporosis and kidney stones.",
    "Improves quality of life and overall health."
  ],
  "challenges": [
    "Risk of vocal cord nerve injury, which may cause hoarseness.",
    "Temporary or permanent low calcium levels (hypocalcemia) may occur.",
    "General surgical risks such as bleeding or infection.",
    "In rare cases, additional surgery may be needed if abnormal glands are not found initially."
  ]
}
,
    {
  "slug": "excision-of-neck-lumps",
  "name": "Excision of Neck Lumps",
  "description": "Excision of neck lumps is a surgical procedure performed to remove abnormal swellings or masses in the neck. These lumps may be caused by enlarged lymph nodes, cysts, infections, congenital anomalies, or tumors. The procedure helps in both treatment and diagnosis, especially when cancer is suspected.",
  "details": {
    "whenNeeded": "Recommended if a neck lump persists, grows, causes pain, or if malignancy is suspected.",
    "preparation": "Preoperative imaging (ultrasound, CT, or MRI) to assess size and involvement; fasting 6-8 hours before surgery; medical fitness evaluation.",
    "rehabilitation": "Mild swelling or discomfort for a few days; return to normal activities within a week; follow-up visits to remove sutures and review pathology results."
  },
  "isItCorrectForYou": [
    "You have a persistent or enlarging neck lump.",
    "You experience pain, discomfort, or difficulty swallowing due to the lump.",
    "Your doctor suspects infection, cyst, or tumor and recommends removal for diagnosis."
  ],
  "benefits": [
    "Provides a definitive diagnosis through histopathology.",
    "Relieves symptoms such as discomfort, pain, or swallowing issues.",
    "Minimizes risk of complications from infection, rupture, or malignant growth.",
    "Often performed with minimal scarring using natural skin creases."
  ],
  "challenges": [
    "Risks of bleeding, infection, or temporary swelling at the surgical site.",
    "Possibility of injury to nearby nerves or blood vessels depending on lump location.",
    "May require general anesthesia in most cases.",
    "Follow-up required to discuss pathology results and guide further treatment."
  ]
}

  ]
},
{
  id: 9,
  category: "liver-spleen-pancreas-surgeries",
  name: "Liver, Spleen & Pancreas Surgeries",
  description: "Liver, spleen, and pancreas surgeries are specialized procedures performed to treat a range of conditions affecting these vital organs in the abdomen. These surgeries may involve removing tumors, cysts, or damaged tissue from the liver, treating an enlarged or injured spleen, or addressing problems such as cancer, chronic inflammation, or cysts in the pancreas. At our center, we focus on providing safe, advanced surgical care that helps restore health, reduce pain, and improve recovery. Using modern techniques such as laparoscopic and robotic surgery, our team works to minimize scars, lower risks, and support patients in getting back to normal life as quickly as possible.",
  subSurgeries: [
    {
  slug: "laparoscopic-splenectomy",
  name: "Laparoscopic Splenectomy",
  description: "Laparoscopic splenectomy is a minimally invasive surgical procedure to remove the spleen using small incisions and a laparoscope (camera). It is often performed to treat conditions such as splenic rupture, certain blood disorders, or enlargement of the spleen (splenomegaly). Compared to open splenectomy, the laparoscopic approach offers reduced postoperative pain, shorter hospital stays, and quicker recovery.",
  details: {
    whenNeeded: "Performed when the spleen is damaged, enlarged, ruptured due to trauma, or in cases of blood disorders like idiopathic thrombocytopenic purpura (ITP), hereditary spherocytosis, or certain cancers.",
    preparation: "Vaccinations against infections (pneumococcal, meningococcal, Haemophilus influenzae type b) are given before surgery. Preoperative blood tests and imaging (CT/ultrasound) are conducted. Fasting for 6-8 hours before surgery is required.",
    rehabilitation: "Hospital stay usually 1–3 days. Return to normal activities in 2–3 weeks. Long-term, patients may need regular vaccinations and preventive antibiotics due to increased infection risk after spleen removal."
  },
  isItCorrectForYou: [
    "You have a damaged or ruptured spleen due to trauma.",
    "You suffer from blood disorders like ITP or hereditary spherocytosis.",
    "Your spleen is enlarged and causing complications.",
    "Doctors have recommended spleen removal for cancer-related conditions."
  ],
  benefits: [
    "Minimally invasive with smaller incisions and faster recovery.",
    "Reduced postoperative pain compared to open surgery.",
    "Shorter hospital stay and quicker return to daily activities.",
    "Better cosmetic outcome with minimal scarring."
  ],
  challenges: [
    "Risk of bleeding or injury to nearby organs (stomach, pancreas, colon).",
    "Increased lifelong risk of infections due to absence of spleen.",
    "Possible complications like pneumonia, abscess, or blood clots.",
    "Requires general anesthesia."
  ]
}
,
    {
  slug: "liver-abscess-drainage",
  name: "Liver Abscess Drainage",
  description: "Liver abscess drainage is a surgical or minimally invasive procedure performed to remove pus-filled cavities in the liver caused by infection. It helps relieve pain, fever, and prevents life-threatening complications such as rupture or sepsis.",
  details: {
    whenNeeded: "Recommended when a liver abscess is large, painful, or not responding to antibiotics.",
    preparation: "Blood tests, ultrasound or CT scan to locate the abscess, fasting 6-8 hours before procedure.",
    rehabilitation: "Hospital stay for a few days, with gradual recovery over 1-2 weeks depending on infection control."
  },
  isItCorrectForYou: [
    "You have persistent fever and abdominal pain due to a liver abscess.",
    "Antibiotics alone are not effective.",
    "Imaging confirms a drainable collection."
  ],
  benefits: [
    "Relieves symptoms quickly.",
    "Prevents rupture and spread of infection.",
    "Minimally invasive options available using guided catheter drainage."
  ],
  challenges: [
    "Risk of bleeding or infection at the drain site.",
    "Abscess may recur if infection is not fully cleared.",
    "Requires careful monitoring and antibiotics."
  ]
},
    {
  slug: "liver-resection",
  name: "Liver Resection (Hepatectomy)",
  description: "Liver resection, or hepatectomy, is a surgical procedure to remove a portion of the liver affected by cancer, tumors, or severe damage. Since the liver has the unique ability to regenerate, patients can often recover well after removal of diseased tissue.",
  details: {
    whenNeeded: "Indicated for liver cancer, metastases, or benign tumors causing symptoms.",
    preparation: "CT/MRI scans, blood tests for liver function, fasting before surgery.",
    rehabilitation: "Hospital stay of 5-7 days, full recovery may take 6-8 weeks."
  },
  isItCorrectForYou: [
    "You have liver cancer or tumors confined to one part of the liver.",
    "Your liver function is strong enough to handle surgery.",
    "You are otherwise healthy for major surgery."
  ],
  benefits: [
    "Curative option for liver cancer or tumors.",
    "Preserves healthy liver tissue that can regenerate.",
    "Improves long-term survival in selected cases."
  ],
  challenges: [
    "Major surgery with longer recovery.",
    "Risk of bleeding, bile leakage, or infection.",
    "Not suitable for patients with poor liver function or cirrhosis."
  ]
},
    {
  slug: "pancreatic-surgery",
  name: "Pancreatic Surgery",
  description: "Pancreatic surgery involves procedures to treat pancreatic cancer, cysts, chronic pancreatitis, or trauma. The type of surgery depends on the condition, ranging from removal of part of the pancreas to complex operations like the Whipple procedure.",
  details: {
    whenNeeded: "Performed for pancreatic tumors, severe chronic pancreatitis, or cysts causing complications.",
    preparation: "CT/MRI scans, blood work, nutritional assessment, and fasting before surgery.",
    rehabilitation: "Hospital stay of 1-2 weeks, with full recovery taking several weeks to months depending on the procedure."
  },
  isItCorrectForYou: [
    "You have a pancreatic tumor or cyst that requires removal.",
    "You suffer from chronic pancreatitis not controlled with medication.",
    "Your condition affects digestion or causes severe pain."
  ],
  benefits: [
    "Can remove tumors and improve survival.",
    "Relieves severe pain from pancreatitis.",
    "Restores digestive function in some cases."
  ],
  challenges: [
    "Complex surgery with risks of bleeding and infection.",
    "Potential long-term effects on digestion and blood sugar control.",
    "Longer hospital stay and recovery period."
  ]
}
  ]
},
  {
  id: 10,
  category: "other-surgeries",
  name: "Other Surgeries",
  description: "Other Surgeries include small but essential procedures such as abscess drainage, cyst or lipoma removal, circumcision, varicose vein treatment, and hydrocele surgery. These are usually quick, safe, and performed under local or short anesthesia. Patients can expect a small incision, simple treatment of the problem, and quick recovery with minimal scars. Most people go home the same day and return to daily activities within a few days.",
  subSurgeries: [
    {
  slug: "abscess-drainage",
  name: "Abscess Drainage",
  description: "Abscess drainage is a minor surgical procedure used to remove pus that has built up within a tissue due to infection. Abscesses can form in the skin, soft tissues, or deeper organs, and they often cause redness, swelling, pain, and sometimes fever. The procedure involves making a small incision to release the trapped pus, followed by cleaning and dressing the wound.",
  details: {
    whenNeeded: "Performed when an abscess becomes painful, swollen, or infected and does not resolve with antibiotics alone.",
    preparation: "Basic blood tests may be done; patient is advised to maintain good hygiene and stop blood-thinning medicines if necessary.",
    rehabilitation: "Healing usually occurs within 1-2 weeks; regular dressing changes and follow-up visits are important to prevent recurrence."
  },
  isItCorrectForYou: [
    "You have a painful, red, and swollen lump that feels warm to touch.",
    "Antibiotics alone are not resolving the infection.",
    "The abscess is causing fever or spreading infection."
  ],
  benefits: [
    "Provides immediate pain relief by draining pus.",
    "Reduces risk of infection spreading to other areas.",
    "Usually performed under local anesthesia with minimal downtime."
  ],
  challenges: [
    "May require repeat drainage if pus re-accumulates.",
    "Risk of scarring at the incision site.",
    "Requires proper wound care to prevent reinfection."
  ]
},
    {
  slug: "cyst-excision",
  name: "Cyst Excision",
  description: "Cyst excision is a surgical procedure to remove abnormal, fluid-filled sacs (cysts) that can develop in the skin, soft tissues, or internal organs. While many cysts are benign and harmless, they may become bothersome if they grow, get infected, or cause cosmetic concerns. Excision ensures complete removal of the cyst wall to reduce the chance of recurrence.",
  details: {
    whenNeeded: "Performed when cysts become large, painful, recurrent, or cosmetically concerning.",
    preparation: "Physical examination and sometimes ultrasound are done to assess the cyst. Fasting is usually not required unless sedation is used.",
    rehabilitation: "Healing generally takes 1-2 weeks; stitches (if placed) are removed within 7-10 days."
  },
  isItCorrectForYou: [
    "You have a cyst that keeps growing or returning after drainage.",
    "The cyst causes pain, infection, or discomfort.",
    "You want removal for cosmetic reasons."
  ],
  benefits: [
    "Permanent removal of the cyst with a low recurrence rate.",
    "Quick outpatient procedure with minimal downtime.",
    "Improves comfort and cosmetic appearance."
  ],
  challenges: [
    "Small scar may remain at the excision site.",
    "Infected cysts may require initial drainage before excision.",
    "Rare chance of recurrence if any part of the cyst wall remains."
  ]
},
    {
  slug: "lipoma-excision",
  name: "Lipoma Excision",
  description: "Lipoma excision is a minor surgical procedure performed to remove lipomas, which are benign fatty lumps that grow slowly under the skin. Lipomas are generally harmless but may be removed if they are painful, growing in size, or cosmetically undesirable. Complete excision ensures the fatty lump does not recur.",
  details: {
    whenNeeded: "Performed when lipomas cause discomfort, pain due to pressure on nerves, or cosmetic concerns.",
    preparation: "Usually no special preparation is needed; in some cases, imaging may be advised to confirm the diagnosis.",
    rehabilitation: "Recovery is quick, with most patients returning to normal activities within 1-2 days; stitches are removed in about a week."
  },
  isItCorrectForYou: [
    "You have a growing lump under the skin that feels soft and movable.",
    "The lipoma is causing pain or pressure symptoms.",
    "You wish to remove it for cosmetic reasons."
  ],
  benefits: [
    "Complete removal prevents recurrence in most cases.",
    "Quick outpatient procedure with local anesthesia.",
    "Improves comfort and cosmetic appearance."
  ],
  challenges: [
    "Minor scarring at the excision site.",
    "Rare chance of infection or bleeding.",
    "Multiple lipomas may require repeated procedures."
  ]
}
,
    {
  slug: "circumcision",
  name: "Circumcision",
  description: "Circumcision is a minor surgical procedure that involves the removal of the foreskin covering the tip of the penis. It is performed for medical, cultural, or hygiene reasons and can help prevent infections, improve hygiene, or treat medical conditions such as phimosis or recurrent balanitis.",
  details: {
    whenNeeded: "Recommended for medical conditions like tight foreskin (phimosis), recurrent infections, or as part of cultural or religious practices.",
    preparation: "Local or general anesthesia is administered. The area is cleaned and prepped before the procedure.",
    rehabilitation: "Usually performed as an outpatient procedure. Full recovery is typically within 7-10 days, with minor discomfort and swelling that gradually resolves."
  },
  isItCorrectForYou: [
    "You have a tight or non-retractable foreskin causing discomfort.",
    "You suffer from repeated infections in the foreskin or glans.",
    "You or your family prefer circumcision for cultural, religious, or personal reasons."
  ],
  benefits: [
    "Prevents recurrent infections and improves hygiene.",
    "Quick procedure with minimal hospital stay.",
    "Typically low risk and well-tolerated."
  ],
  challenges: [
    "Mild pain, swelling, or redness during healing.",
    "Small risk of bleeding or infection at the incision site.",
    "Requires careful post-operative care to ensure proper healing."
  ]
},
    {
  slug: "varicose-vein-surgery",
  name: "Varicose Vein Surgery",
  description: "Varicose vein surgery treats enlarged, twisted veins in the legs that cause discomfort, swelling, heaviness, or cosmetic concerns. Surgical options include vein ligation, stripping, or minimally invasive techniques such as endovenous laser or radiofrequency ablation.",
  details: {
    whenNeeded: "Performed when varicose veins cause pain, swelling, ulcers, bleeding, or for cosmetic improvement.",
    preparation: "Preoperative evaluation includes ultrasound of the leg veins, routine blood tests, and avoiding certain medications. Patients may be advised to wear compression stockings after surgery.",
    rehabilitation: "Most patients can walk immediately after surgery. Recovery varies from a few days for minimally invasive procedures to 1-2 weeks for traditional surgery."
  },
  isItCorrectForYou: [
    "You have visible, bulging veins causing discomfort or heaviness in your legs.",
    "You experience swelling, itching, or skin changes due to varicose veins.",
    "Non-surgical treatments like compression stockings have not provided sufficient relief."
  ],
  benefits: [
    "Relieves pain, swelling, and leg fatigue.",
    "Improves cosmetic appearance of the legs.",
    "Minimally invasive techniques allow faster recovery and minimal scarring."
  ],
  challenges: [
    "Some patients may experience bruising, swelling, or mild discomfort.",
    "Recurrence of varicose veins is possible in the long term.",
    "Requires careful post-operative care and compression therapy."
  ]
},
    {
  slug: "hydrocele-surgery",
  name: "Hydrocele Surgery",
  description: "Hydrocele surgery is a minor procedure to remove or repair a fluid-filled sac surrounding the testicle, which causes swelling and discomfort in the scrotum. Hydroceles are usually painless but can become large and bothersome, and surgery helps restore normal scrotal size and function.",
  details: {
    whenNeeded: "Recommended when hydroceles are large, symptomatic, or causing discomfort or cosmetic concern.",
    preparation: "Preoperative evaluation includes physical examination, ultrasound, and routine blood tests. Patients are usually advised to fast before surgery if general anesthesia is used.",
    rehabilitation: "Most surgeries are outpatient. Recovery is usually within 1-2 weeks, with swelling and mild discomfort gradually subsiding."
  },
  isItCorrectForYou: [
    "You have scrotal swelling due to fluid accumulation around the testicle.",
    "Hydrocele is causing discomfort, pain, or interference with daily activities.",
    "You wish to improve the cosmetic appearance of the scrotum."
  ],
  benefits: [
    "Relieves swelling and discomfort effectively.",
    "Quick outpatient procedure with minimal hospital stay.",
    "Low risk and long-lasting results."
  ],
  challenges: [
    "Mild swelling, bruising, or discomfort during recovery.",
    "Small risk of infection or recurrence of hydrocele.",
    "Careful post-operative care needed to avoid complications."
  ]
},
    {
  slug: "frenuloplasty",
  name: "Frenuloplasty for Short or Tight Frenulum",
  description: "Frenuloplasty is a minor surgical procedure to correct a short or tight frenulum—the band of tissue under the penis that can restrict movement. This condition can cause pain during sexual activity, tearing, or difficulty with hygiene. Frenuloplasty releases or lengthens the frenulum to relieve discomfort and improve function.",
  details: {
    whenNeeded: "Recommended when a tight frenulum causes pain, tearing, or difficulty during sexual activity or hygiene.",
    preparation: "The area is cleaned and local or general anesthesia is administered. No extensive fasting is usually required for minor procedures.",
    rehabilitation: "Healing is typically fast, with most patients resuming normal activity in 1-2 weeks. Mild discomfort and swelling may occur initially."
  },
  isItCorrectForYou: [
    "You experience pain or tearing due to a short frenulum.",
    "Sexual activity is uncomfortable or restricted.",
    "Daily hygiene is difficult because of tight foreskin tissue."
  ],
  benefits: [
    "Relieves pain and prevents tearing during sexual activity.",
    "Minimally invasive with quick recovery.",
    "Improves function and comfort for daily activities and intimacy."
  ],
  challenges: [
    "Mild swelling, redness, or discomfort after surgery.",
    "Small risk of infection or bleeding at the surgical site.",
    "Requires proper post-operative care to ensure healing."
  ]
},
    {
  slug: "orchidectomy",
  name: "Orchidectomy (Testicular Surgery)",
  description: "Orchidectomy is a surgical procedure to remove one or both testicles. It is performed for conditions such as testicular cancer, severe trauma, chronic infections, or other testicular diseases. The surgery helps treat disease, prevent complications, and, in the case of cancer, can be life-saving.",
  details: {
    whenNeeded: "Performed for testicular cancer, severe trauma, chronic infections, or non-functioning testicles causing pain or hormonal issues.",
    preparation: "Preoperative evaluation includes blood tests, imaging, and anesthesia assessment. Patients may need to fast prior to surgery.",
    rehabilitation: "Hospital stay is usually 1-2 days. Recovery takes 2-4 weeks, with gradual resumption of normal activities. Hormonal replacement therapy may be needed if both testicles are removed."
  },
  isItCorrectForYou: [
    "You have testicular cancer or tumors.",
    "You suffer from chronic infections or non-functional testicles.",
    "You have severe trauma to the testicle that cannot be repaired."
  ],
  benefits: [
    "Removes diseased or damaged testicles effectively.",
    "Prevents spread of cancer or infection.",
    "Relieves pain and resolves testicular dysfunction."
  ],
  challenges: [
    "Surgical risks such as bleeding, infection, or swelling.",
    "Potential need for hormonal therapy if both testicles are removed.",
    "Emotional and psychological impact of testicle removal."
  ]
}
  ]
},
  {
  id: 11,
  category: "trauma-emergency-surgeries",
  name: "Trauma & Emergency Surgeries",
  description: "Trauma & Emergency Surgeries are life-saving procedures done in urgent situations such as accidents, severe injuries, or sudden internal bleeding. The medical team first stabilizes the patient and then performs surgery to stop bleeding, repair damaged organs, or remove life-threatening injuries. These surgeries are often done on the liver, spleen, intestines, or other vital organs. After surgery, patients are carefully monitored in the ICU and given proper care including medicines, nutrition, and physiotherapy. Quick and expert surgical treatment can make the difference between life and death, helping patients recover and return to normal life safely.",
  subSurgeries: [
    {
  slug: "abdominal-trauma-surgery",
  name: "Abdominal Trauma Surgery",
  description: "Abdominal trauma surgery is an emergency surgical procedure performed to treat injuries to the abdominal organs caused by blunt or severe trauma. This surgery addresses internal bleeding, organ damage, or perforations, and aims to stabilize the patient and prevent life-threatening complications.",
  details: {
    whenNeeded: "Performed immediately in cases of severe abdominal injury from accidents, falls, or blunt force trauma.",
    preparation: "Emergency evaluation including physical exam, imaging (ultrasound, CT), and blood tests. No fasting required in emergencies.",
    rehabilitation: "Recovery varies based on injury severity; hospital stay may range from a few days to several weeks. Gradual return to normal activity under medical supervision."
  },
  isItCorrectForYou: [
    "You have sustained significant abdominal trauma causing pain or internal bleeding.",
    "Imaging shows organ injury or perforation requiring surgery.",
    "Non-surgical management is insufficient or unsafe."
  ],
  benefits: [
    "Stops internal bleeding and repairs damaged organs.",
    "Prevents life-threatening complications from trauma.",
    "Stabilizes overall health and organ function."
  ],
  challenges: [
    "Surgical risks including infection, bleeding, and anesthesia complications.",
    "Recovery may be prolonged depending on the severity of injuries.",
    "May require follow-up surgeries or long-term monitoring."
  ]
},
    {
  slug: "penetrating-injury-repair",
  name: "Penetrating Injury Repair",
  description: "Penetrating injury repair is an emergency procedure to manage wounds caused by sharp objects such as knives, bullets, or glass that penetrate the body. The surgery focuses on repairing damaged tissues, controlling bleeding, and preventing infections.",
  details: {
    whenNeeded: "Performed when a penetrating object causes significant injury to internal organs, blood vessels, or tissues.",
    preparation: "Immediate assessment, imaging if possible, blood tests, and stabilization. No fasting is required for emergencies.",
    rehabilitation: "Hospital stay depends on injury severity, often several days. Recovery includes wound care, infection prevention, and gradual resumption of daily activities."
  },
  isItCorrectForYou: [
    "You have a deep puncture or cut causing internal bleeding or organ injury.",
    "There is risk of infection or tissue damage that cannot heal on its own.",
    "Immediate surgical repair is needed for life-threatening injuries."
  ],
  benefits: [
    "Controls bleeding and repairs damaged organs or tissues.",
    "Reduces risk of infection and long-term complications.",
    "Restores function and stabilizes health quickly."
  ],
  challenges: [
    "Emergency procedure carries higher risks of complications.",
    "May require intensive post-operative care and monitoring.",
    "Recovery depends on extent and location of the injury."
  ]
},
    {
  slug: "bleeding-ulcer-surgery",
  name: "Bleeding Ulcer Surgery",
  description: "Bleeding ulcer surgery is performed to treat severe peptic ulcers that cause uncontrolled bleeding, perforation, or other life-threatening complications. This surgery helps stop bleeding, repair the stomach or duodenal lining, and prevent recurrence of ulcer-related complications.",
  details: {
    whenNeeded: "Indicated when ulcers do not respond to medical treatment or cause severe bleeding, perforation, or obstruction.",
    preparation: "Preoperative evaluation includes blood tests, endoscopy, imaging, and stabilization. Patients may need fasting and IV fluids before surgery.",
    rehabilitation: "Hospital stay is typically 5-7 days. Full recovery takes several weeks, including dietary modifications, medications, and follow-up monitoring."
  },
  isItCorrectForYou: [
    "You have a bleeding or perforated ulcer not controlled by medications.",
    "You experience recurrent ulcer-related complications or severe pain.",
    "Endoscopic treatment or medications have failed to stop bleeding."
  ],
  benefits: [
    "Stops life-threatening bleeding from ulcers.",
    "Repairs stomach or duodenal tissue to prevent recurrence.",
    "Improves long-term gastrointestinal health."
  ],
  challenges: [
    "Risk of surgical complications like infection, bleeding, or anesthesia reactions.",
    "Requires careful post-operative dietary and lifestyle management.",
    "Recovery may be prolonged, with follow-up monitoring required."
  ]
},
    {
  slug: "emergency-bowel-obstruction-surgery",
  name: "Emergency Bowel Obstruction Surgery",
  description: "Emergency bowel obstruction surgery is performed to relieve a blockage in the intestines that prevents the normal passage of food, fluids, and gas. This condition can be life-threatening if not treated promptly, and surgery aims to remove or bypass the obstruction, restore bowel function, and prevent complications such as perforation, infection, or tissue death.",
  details: {
    whenNeeded: "Performed when a bowel obstruction causes severe pain, vomiting, abdominal distension, or when non-surgical management is insufficient or unsafe.",
    preparation: "Emergency evaluation including physical examination, imaging (X-ray, CT scan), blood tests, and stabilization of fluids and electrolytes. No fasting is required in emergencies.",
    rehabilitation: "Hospital stay typically ranges from 5-10 days depending on the severity of the obstruction and surgery type. Gradual return to normal diet and activities under medical supervision is recommended."
  },
  isItCorrectForYou: [
    "You have severe abdominal pain, vomiting, and inability to pass stool or gas.",
    "Imaging shows a bowel obstruction that cannot be managed conservatively.",
    "There is a risk of bowel perforation or infection if surgery is delayed."
  ],
  benefits: [
    "Relieves intestinal obstruction and restores bowel function.",
    "Prevents life-threatening complications like perforation and sepsis.",
    "Rapid intervention improves survival and overall recovery."
  ],
  challenges: [
    "Surgical risks including infection, bleeding, and anesthesia complications.",
    "Recovery may be prolonged depending on obstruction severity and patient condition.",
    "May require temporary or permanent changes in diet or bowel habits."
  ]
}

  ]
}



  // ⚡ You can continue similarly for Piles, Abdominal, Bariatric, Breast, Thyroid, etc.
];
