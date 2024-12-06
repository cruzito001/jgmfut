import React, { useState } from "react";
import type { FAQItem } from "../../data/faq";
import styles from "./FAQ.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <button
              className={styles.questionButton}
              onClick={() => toggleItem(index)}
            >
              <h2 className={styles.question}>{item.question}</h2>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {openIndex === index && (
              <div className={styles.answerWrapper}>
                <p className={styles.answer}>{item.answer}</p>
                {item.button && (
                  <a
                    href={item.button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    {item.button.text}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
