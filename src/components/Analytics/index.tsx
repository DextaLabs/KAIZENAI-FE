"use client";
import { Managers } from "@/library/utils/constant";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Header from "../Dashboard/Header";
import Button from "../Shared/Button";
import styles from "./analytics.module.scss";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

type emotionType =
  | "Determination"
  | "Anxiety"
  | "Anger"
  | "Disgust"
  | "Sadness"
  | "Pain"
  | "Fear"
  | "Awe"
  | "Adoration"
  | "Joy"
  | "Interest"
  | "Relief"
  | "Calmness"
  | "Tiredness"
  | "Boredom"
  | "Toxic"
  | "Concentration";

function calculateAverage(array: number[]) {
  var total = 0;
  var count = 0;

  array.forEach(function (item) {
    total += item;
    count++;
  });

  return total;
}

const emotions: {
  name: emotionType;
  top: number;
  left: number;
  hex: string;
}[] = [
  { hex: "#ff5c00", name: "Determination", top: 5, left: 50 },
  { hex: "#6e42cc", name: "Anxiety", top: 15, left: 65 },
  { hex: "#b21816", name: "Anger", top: 20, left: 67 },
  { hex: "#1A7A41", name: "Disgust", top: 30, left: 80 },
  { hex: "#305575", name: "Sadness", top: 40, left: 75 },
  { hex: "#8c1d1d", name: "Pain", top: 45, left: 75 },
  { hex: "#8038ec", name: "Fear", top: 55, left: 80 },
  { hex: "#0088ff", name: "Awe", top: 65, left: 79 },
  { hex: "#ef75ff", name: "Adoration", top: 70, left: 75 },
  { hex: "#ffd600", name: "Joy", top: 75, left: 60 },
  { hex: "#2ed5c8", name: "Interest", top: 73, left: 45 },
  { hex: "#fe927a", name: "Relief", top: 65, left: 25 },
  { hex: "#4d90f1", name: "Calmness", top: 60, left: 20 },
  { hex: "#000000", name: "Tiredness", top: 50, left: 19 },
  { hex: "#634d36", name: "Boredom", top: 45, left: 21 },
  { hex: "#879aa1", name: "Toxic", top: 30, left: 24 },
  { hex: "#70e63a", name: "Concentration", top: 20, left: 30 },
];

const Analytics = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const [result, setResult] = useState<
    { emotion: emotionType; value: number }[][]
  >([]);

  const handleGenerateResult = () => {
    const threeEmotion: emotionType[] = [];

    do {
      const categoryIndex = getRandomInt(emotions.length);
      const category = emotions[categoryIndex].name;

      if (!threeEmotion.includes(category)) {
        threeEmotion.push(category);
      }
    } while (threeEmotion.length < 3);

    const result: { emotion: emotionType; value: number }[] = [];

    threeEmotion.forEach(category => {
      result.push({
        emotion: category,
        value: Number(Math.random().toFixed(2)),
      });
    });

    setResult(prev => [...prev, result]);
  };

  //	FFD1A4

  useEffect(() => {
    if (!result.length) return;

    const newResult = result.slice(-1);

    const top: number[] = [];
    const left: number[] = [];

    newResult[0].forEach(item => {
      const emotionItem = emotions.find(i => i.name === item.emotion);
      top.push(emotionItem!.top * item.value * item.value);
      left.push(emotionItem!.left * item.value * item.value);
    });

    const avgTop = calculateAverage(top);
    const avgLeft = calculateAverage(left);

    const newChild = document.createElement("div");
    if (ref.current) {
      newChild.style.position = "absolute";
      newChild.style.top = `${avgTop}%`;
      newChild.style.left = `${avgLeft}%`;
      newChild.style.borderRadius = `50%`;
      newChild.style.border = `1px solid white`;
      newChild.style.height = `8px`;
      newChild.style.width = `8px`;
      newChild.style.backgroundColor = `#FFD1A4`;

      ref.current.appendChild(newChild);
    }
  }, [result]);

  return (
    <main className={classNames("p-9")}>
      <Header {...Managers[0]} />
      <div className={styles.wrapper} ref={ref}>
        {emotions.map(i => {
          return (
            <div
              className={`flex gap-1 absolute text-[10px] text-white bg-[#05050560] w-fit p-1 rounded-md -translate-x-2/4	`}
              style={{ top: `${i.top}%`, left: `${i.left}%` }}
              key={i.name}
            >
              <div
                className="h-4 w-4 rounded-sm"
                style={{ background: i.hex }}
              />
              <div>{i.name}</div>
            </div>
          );
        })}
      </div>
      <Button
        className="bg-purple hover:bg-purple mt-4"
        onClick={() => {
          handleGenerateResult();
        }}
      >
        Generate Result
      </Button>
    </main>
  );
};

export default Analytics;
