import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
      <div className="mb-32">
          <div className="text-center">
              <h1 className="text-3xl md:text-5xl mt-10 md:mt-20 mb-10 p-4">
                  Frequently Asked Questions
              </h1>
          </div>

          <div className="max-w-screen-lg mx-auto px-4">
              <Accordion type="single" collapsible className="w-full">
                  {faqData.map(({ value, question, answer }) => (
                      <AccordionItem key={value} value={value}>
                          <AccordionTrigger className="text-lg text-red-600 md:text-xl font-ibm-plex-sans">
                              {question}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-red-400 md:text-lg font-ibm-plex-sans">
                              {answer}
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
          </div>
      </div>
  );
}

const faqData = [
    
    {
      value: "item-1",
      question: "What is VishwaCTF?",
      answer: "VishwaCTF is the flagship event of CyberCell, VIIT. It was the first Capture The Flag (CTF) competition from Maharashtra to be hosted on a global scale. It features a variety of security challenges designed to test and improve participants' cybersecurity skills.",
    },
    {
      value: "item-2",
      question: "What is VishwaCTF Mini?",
      answer: "VishwaCTF Mini is a practice CTF competition hosted before the main VishwaCTF event. It serves as a warm-up challenge for participants to get familiar with the format, tools, and types of problems they will face in the main event.",
    },
    
    {
      value: "item-3",
      question: "Why play or organize a CTF?",
      answer: "CTFs provide a fun and practical way to learn cybersecurity concepts. They help participants develop problem-solving skills, think like hackers, and gain hands-on experience in real-world security scenarios. Organizing a CTF fosters a strong security community and encourages learning.",
    },
    {
      value: "item-4",
      question: "Who is organizing VishwaCTF?",
      answer: "VishwaCTF is organized by students of VIIT as part of the CyberCell club. The event is designed and hosted with the support of faculty and industry professionals.",
    },
    {
      value: "item-5",
      question: "How do I prepare for the competition?",
      answer: "You can prepare by solving previous VishwaCTF challenges, practicing on platforms like Hack The Box, TryHackMe, and picoCTF, and learning about common security vulnerabilities.",
    },
    {
      value: "item-6",
      question: "Where can I find past VishwaCTF challenges?",
      answer: "Past VishwaCTF challenges are sometimes made available on our official website or GitHub repository. Keep an eye on our announcements for access to previous problems.",
    },
    {
      value: "item-7",
      question: "How can I stay updated about the competition?",
      answer: "Follow us on social media and check our website regularly for updates. We post important announcements, tips, and registration details on our official channels.",
    },
  ];
  
export default faqData;