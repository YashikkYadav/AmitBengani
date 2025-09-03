const diseasesData = {
  piles: {
    title: "Piles Treatment in Jaipur",
    description: [
      "Piles, also called hemorrhoids, are swollen veins in the rectum or anus that cause pain, bleeding, and discomfort while passing stool. Many patients suffer silently due to embarrassment, but untreated piles can worsen over time and severely affect daily life.",
      "Common symptoms include itching, irritation, and swelling that make sitting or walking difficult. At our Jaipur center, we use advanced laser and minimally invasive procedures that are painless, safe, and highly effective.",
      "The treatment ensures minimal blood loss, faster healing, and no long hospital stay. Our patient-first approach focuses on helping you return to a comfortable and confident life quickly."
    ],
    symptoms: [
      "Bleeding during bowel movements",
      "Itching or irritation in anal region",
      "Pain or discomfort",
      "Swelling around the anus",
    ],
    treatments: [
      "Laser surgery for piles",
      "Minimally invasive procedures",
      "Lifestyle and diet modification",
    ],
  },

  fissure: {
    title: "Fissure Treatment in Jaipur",
    description: [
      "An anal fissure is a small but very painful tear in the lining of the anus that makes passing stool extremely difficult. Patients often complain of sharp, burning pain during and after bowel movements along with bleeding, which creates fear and anxiety.",
      "Ignoring the condition can make it chronic and harder to treat. At our Jaipur clinic, we provide modern fissure treatments like medications, Botox injections, and advanced laser surgery.",
      "These methods are designed to reduce pain, heal the tear, and prevent recurrence. With compassionate care and minimally invasive techniques, we help patients regain comfort and resume normal life without fear."
    ],
    symptoms: ["Sharp pain during bowel movement", "Bleeding", "Visible tear near anus"],
    treatments: ["Laser fissure surgery", "Medication", "Botox injection"],
  },

  fistula: {
    title: "Fistula Treatment in Jaipur",
    description: [
      "An anal fistula is an abnormal tunnel that forms between the anal canal and the skin near the anus, often due to infection or abscess. Patients usually experience constant pain, swelling, and pus or blood discharge, which can be embarrassing and affect daily life.",
      "If untreated, fistulas can keep recurring and cause serious complications. Our team in Jaipur offers advanced laser surgery, fistulotomy, and seton placement that are safe and effective.",
      "These treatments are minimally invasive, reduce recurrence, and promote faster healing. With patient-focused care, we aim to provide permanent relief and restore your quality of life."
    ],
    symptoms: ["Persistent discharge near anus", "Pain and swelling", "Recurrent abscesses"],
    treatments: ["Laser fistula surgery", "Fistulotomy", "Seton placement"],
  },

  hernia: {
    title: "Hernia Treatment in Jaipur",
    description: [
      "A hernia occurs when an internal organ, such as the intestine, pushes through a weak spot in the muscle wall, usually in the abdomen or groin. Patients often notice a visible bulge that may increase with coughing, bending, or lifting heavy objects.",
      "Hernias can cause pain, heaviness, and severe discomfort, and if untreated, may lead to dangerous complications like strangulation.",
      "At our Jaipur hospital, we specialize in laparoscopic and open hernia repair using advanced mesh techniques. These methods are safe, effective, and ensure long-term results with minimal recovery time. We focus on helping patients return to normal activities confidently and without risk."
    ],
    symptoms: ["Visible bulge in abdomen or groin", "Pain or discomfort", "Heaviness in abdomen"],
    treatments: [
      "Laparoscopic hernia repair",
      "Open surgery",
      "Mesh repair techniques",
    ],
  },

  gallstones: {
    title: "Gallbladder Stones Treatment in Jaipur",
    description: [
      "Gallstones are hardened deposits in the gallbladder that interfere with digestion and often cause sudden, sharp abdominal pain. Many patients also experience nausea, bloating, and discomfort after eating fatty foods.",
      "If not treated, gallstones can block bile ducts, leading to infection, jaundice, or other complications. At our Jaipur center, we provide laparoscopic gallbladder removal surgery, which is a safe, minimally invasive, and permanent solution.",
      "This procedure requires only small cuts, ensures less pain, and allows quick recovery. With expert care and advanced techniques, we help patients achieve long-term relief and improved digestive health."
    ],
    symptoms: [
      "Severe abdominal pain",
      "Nausea and vomiting",
      "Indigestion after fatty meals",
      "Jaundice (in severe cases)",
    ],
    treatments: ["Laparoscopic cholecystectomy", "Medication (limited cases)", "Dietary changes"],
  },

  appendicitis: {
    title: "Appendicitis Treatment in Jaipur",
    description: [
      "Appendicitis is a medical emergency caused by inflammation of the appendix, a small pouch attached to the large intestine. It usually starts with pain near the navel that shifts to the lower right abdomen, often accompanied by fever, nausea, and vomiting.",
      "If left untreated, the appendix can burst, leading to life-threatening complications like infection in the abdomen.",
      "At our Jaipur hospital, we perform laparoscopic appendectomy, a minimally invasive surgery to remove the appendix safely. This method ensures faster healing, less pain, and minimal scarring. With timely diagnosis and expert surgical care, patients recover quickly and safely."
    ],
    symptoms: [
      "Sharp abdominal pain (usually lower right side)",
      "Fever",
      "Nausea and vomiting",
      "Loss of appetite",
    ],
    treatments: ["Laparoscopic appendectomy", "Open appendectomy (rare cases)"],
  },

  "varicose-veins": {
    title: "Varicose Veins Treatment in Jaipur",
    description: [
      "Varicose veins are enlarged, twisted veins usually seen in the legs due to weak vein valves that affect blood flow. Patients often suffer from pain, heaviness, and swelling in the legs, which worsens after long hours of standing or walking.",
      "In severe cases, skin changes, ulcers, or bleeding may occur. At our Jaipur clinic, we offer advanced treatments such as laser ablation, radiofrequency ablation, and sclerotherapy.",
      "These methods are minimally invasive, highly effective, and ensure improved appearance along with symptom relief. Our focus is on restoring both comfort and confidence in patients with varicose veins."
    ],
    symptoms: ["Swollen and twisted veins", "Pain and heaviness in legs", "Leg cramps at night"],
    treatments: [
      "Laser ablation treatment",
      "Radiofrequency ablation",
      "Sclerotherapy",
      "Lifestyle changes",
    ],
  },

  hydrocele: {
    title: "Hydrocele Treatment in Jaipur",
    description: [
      "A hydrocele is a condition where fluid collects around the testicle, leading to swelling in the scrotum. While usually painless, it can cause discomfort, heaviness, and embarrassment for many patients.",
      "If untreated, hydroceles may increase in size and interfere with walking or daily activities. At our Jaipur hospital, we perform hydrocelectomy, a simple and safe surgery that permanently cures the problem.",
      "Our minimally invasive approach ensures less pain, quick recovery, and minimal hospital stay. With expert care and advanced methods, patients regain normalcy and confidence without complications."
    ],
    symptoms: ["Swelling in scrotum", "Heaviness in groin area", "Discomfort while walking"],
    treatments: ["Hydrocelectomy surgery", "Aspiration (temporary relief)", "Minimally invasive options"],
  },

  "pilonidal-sinus": {
    title: "Pilonidal Sinus Treatment in Jaipur",
    description: [
      "Pilonidal sinus is a small hole or tunnel in the skin near the tailbone that often gets infected, leading to pain, swelling, and pus discharge. Patients usually feel discomfort while sitting, walking, or doing daily activities, and repeated infections can make life miserable.",
      "If ignored, the condition may keep coming back and require complex surgery later. At our Jaipur center, we provide advanced laser surgery and minimally invasive excision techniques.",
      "These treatments ensure permanent cure, minimal pain, and faster healing. With personalized care, we focus on helping patients recover completely and prevent future recurrence."
    ],
    symptoms: [
      "Pain and swelling near tailbone",
      "Discharge of pus or blood",
      "Recurrent infections",
    ],
    treatments: ["Laser surgery for pilonidal sinus", "Minimally invasive excision", "Proper wound care"],
  },

  thyroid: {
    title: "Thyroid Diseases Treatment in Jaipur",
    description: [
      "Thyroid disorders like goiter, hypothyroidism, and hyperthyroidism affect metabolism, energy levels, and overall well-being. Patients may notice symptoms such as neck swelling, fatigue, weight changes, or difficulty swallowing.",
      "If untreated, thyroid problems can lead to heart disease, infertility, or other serious health issues. At our Jaipur clinic, we provide expert care through medical management, radioactive iodine therapy, and thyroid surgery if required.",
      "Our treatment plans are customized to each patient, ensuring safe and effective outcomes. With compassionate care and modern methods, we help patients regain hormonal balance and lead a healthy, active life."
    ],
    symptoms: [
      "Neck swelling",
      "Unexplained weight changes",
      "Fatigue or hyperactivity",
      "Voice changes or difficulty swallowing",
    ],
    treatments: [
      "Medication (thyroid hormone therapy)",
      "Radioactive iodine treatment",
      "Thyroidectomy surgery (if needed)",
    ],
  },
};

export default diseasesData;
