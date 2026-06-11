"use client";
import { useRef, useState, useEffect } from "react";
import "./index.css";

interface CardReaderProps {
  onScanSuccess: () => void;
}

const CardReader: React.FC<CardReaderProps> = ({ onScanSuccess }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const readerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const [timeStart, setTimeStart] = useState(0);
  const [soundAccepted, setSoundAccepted] = useState<HTMLAudioElement | null>(null);
  const [soundDenied, setSoundDenied] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setSoundAccepted(new Audio("https://thomaspark.co/projects/among-us-card-swipe/audio/CardAccepted.mp3"));
    setSoundDenied(new Audio("https://thomaspark.co/projects/among-us-card-swipe/audio/CardDenied.mp3"));
  }, []);

  const dragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!cardRef.current || !readerRef.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setInitialX(clientX);
    setMoveX(0);
    setTimeStart(performance.now());
    setActive(true);
    cardRef.current.classList.remove("slide");
  };

  const drag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!active || !cardRef.current || !readerRef.current) return;
    e.preventDefault();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    let newMoveX = clientX - initialX;
    const readerRect = readerRef.current.getBoundingClientRect();
    const maxX = readerRect.width - cardRef.current.offsetWidth / 2;
    newMoveX = Math.max(0, Math.min(newMoveX, maxX));
    setMoveX(newMoveX);
  };

  useEffect(() => {
    if (cardRef.current) {
      requestAnimationFrame(() => {
        cardRef.current!.style.transform = `translateX(${moveX}px)`;
      });
    }
  }, [moveX]);

  const dragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!active || !cardRef.current || !readerRef.current) return;
    setActive(false);
    e.preventDefault();

    const timeEnd = performance.now();
    const duration = timeEnd - timeStart;
    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const finalMoveX = clientX - initialX;
    const readerRect = readerRef.current.getBoundingClientRect();
    const minSwipeDistance = readerRect.width * 0.7;

    let status: "valid" | "fast" | "slow" | "invalid";

    if (finalMoveX < minSwipeDistance) {
      status = "invalid";
    } else if (duration < 200) {
      status = "fast";
    } else if (duration > 700) {
      status = "slow";
    } else {
      status = "valid";
    }

    readerRef.current.dataset.status = status;
    playAudio(status);
  };

  const playAudio = (status: string) => {
    if (!soundAccepted || !soundDenied) return;
    soundDenied.pause();
    soundAccepted.pause();
    soundDenied.currentTime = 0;
    soundAccepted.currentTime = 0;

    if (status === "valid") {
      soundAccepted.play();
      setTimeout(() => {
        onScanSuccess(); // Notify the parent to switch components
      }, 500); // Delay before revealing the tech cards
    } else {
      soundDenied.play();
      resetCard();
    }
  };

  const resetCard = () => {
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `translateX(0px)`;
        cardRef.current.classList.add("slide");
      }
    }, 500);
  };

  return (
    <div id="wrapper">
      <div id="reader" ref={readerRef} data-status="">
        <div className="top">
          <div className="screen">
            <div id="message"></div>
          </div>
          <div className="lights">
            <div className="light red"></div>
            <div className="light green"></div>
          </div>
        </div>
        <div id="card" ref={cardRef} 
          onMouseDown={dragStart} 
          onMouseUp={dragEnd} 
          onMouseMove={drag} 
          onTouchStart={dragStart} 
          onTouchEnd={dragEnd} 
          onTouchMove={drag}
        >
          <div id="photo"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default CardReader;
