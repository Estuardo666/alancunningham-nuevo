"use client";

import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import type { Faq } from "@/content/types";

/**
 * Framer Motion accordion, driven by the content layer. It starts with the
 * same `All closed` state as the reference component and opens one row at a
 * time. Only the answer height animates: the question and icon never receive
 * FLIP scale transforms, which keeps their typography and circles undistorted.
 *
 */
export function FaqBlock({
  faqs,
}: {
  faqs: Faq[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  const answerTransition = {
    duration: 0.28,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="faq-accordion flex w-full flex-col gap-1.5 overflow-hidden rounded-[24px] p-1">
        {faqs.map((faq, index) => {
          const isOpen = index === open;
          const answerId = `faq-answer-${index}`;

          return (
            <div
              key={faq.pregunta}
              data-open={isOpen}
              className="faq-accordion__item relative w-full overflow-hidden rounded-[20px]"
            >
              <h3 className="flex w-full">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => {
                    setOpen(isOpen ? null : index);
                  }}
                  className="group flex min-h-[60px] w-full items-center gap-3 p-4 text-left"
                >
                  <span className="faq-accordion__question min-w-0 flex-1 text-[18px] font-medium leading-[140%] tracking-[-0.04em]">
                    {faq.pregunta}
                  </span>
                  <span className="faq-accordion__icon relative flex h-7 min-h-7 w-7 min-w-7 flex-none items-center justify-center rounded-full transition-colors duration-200">
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current"
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
                    />
                  </span>
                </button>
              </h3>

              <motion.div
                id={answerId}
                role="region"
                aria-hidden={!isOpen}
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={answerTransition}
                className={`faq-accordion__answer-container w-full overflow-hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
              >
                <div className="px-4 pt-1 pb-5 sm:px-6 sm:pb-6">
                  <p className="faq-accordion__answer text-[16px] leading-[140%] tracking-[-0.04em]">
                    {faq.respuesta}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </MotionConfig>
  );
}
