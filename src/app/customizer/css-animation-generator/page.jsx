"use client";
import { NavBar } from "@/app/components/navbar";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "./animations.css";
import React, { useRef } from "react";

const CssAnimationGenerator = () => {
  const [animation, setAnimation] = React.useState("Blink1");
  const [keyframe, setKeyframe] = React.useState("");

  const animatedDivRef = useRef(null);

  const getKeyframes = () => {
    const animatedDiv = animatedDivRef.current;
    const styleSheets = document.styleSheets;
    if (animatedDiv) {
      const computedStyles = window.getComputedStyle(animatedDiv);
      const animationName = computedStyles.animationName;
      for (const styleSheet of styleSheets) {
        const rules = styleSheet.rules || styleSheet.cssRules;
        for (const rule of rules) {
          if (
            rule.type === CSSRule.KEYFRAMES_RULE &&
            rule.name === animationName
          ) {
            console.log("Keyframes:", rule.cssText, setKeyframe(rule.cssText));
            break;
          }
        }
      }
    }
  };
  const handleChange = (event) => {
    setAnimation(event.target.value.split(" ").join(""));
    getKeyframes();
  };
  return (
    <div className="min-h-screen">
      <NavBar title={"Box Shadow generator"} />
      <main className=" max-w-6xl  m-auto">
        <div className="flex flex-col gap-3 mt-10 items-center">
          <h1 className="text-5xl font-extrabold text-center">
            Css animation generator
          </h1>
          <p className="text-slate-400 text-center">
            Create and export beautiful box shadow.
          </p>
        </div>
        <div className=" flex  mt-5  overflow-hidden rounded-lg border-2 border-blue-500">
          <section className="w-1/2 p-4 bg-white overflow-hidden">
            <div className=" flex justify-center">
              <ButtonGroup
                size=""
                variant="outlined"
                aria-label="Basic button group"
              >
                {animtionOptions.map((option) => (
                  <Button>{option}</Button>
                ))}
              </ButtonGroup>
            </div>

            <div className=" w-full pt-5 flex flex-col gap-2">
              <FormControl>
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  className=" "
                >
                  Animation type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handleChange}
                  label="Animation type"
                >
                  {animationType.map((type) => (
                    <MenuItem value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className=" flex w-full gap-2">
                <TextField
                  id="outlined-basic"
                  label="Duration"
                  variant="outlined"
                  className=" flex-1"
                />{" "}
                <FormControl>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    onChange={handleChange}
                    value={"seconds"}
                    defaultChecked
                    fullWidth={true}
                    className=" "
                  >
                    <MenuItem value={"seconds"}>seconds</MenuItem>
                    <MenuItem value={"millisecods"}>milliseconds</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <FormControl>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Timing function
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handleChange}
                  label="Time function"
                  fullWidth={true}
                  minWidth={"180px"}
                >
                  {timingFunction.map((option) => (
                    <MenuItem value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className=" flex w-full gap-2">
                <TextField
                  id="outlined-basic"
                  label="Delay"
                  variant="outlined"
                  className=" flex-1"
                />
                <FormControl>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    onChange={handleChange}
                    value={"seconds"}
                    defaultChecked
                    fullWidth={true}
                    className=" "
                  >
                    <MenuItem value={"seconds"}>seconds</MenuItem>
                    <MenuItem value={"millisecods"}>milliseconds</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <TextField
                id="outlined-basic"
                label="Iteration count"
                variant="outlined"
              />
              <FormControl>
                <InputLabel id="1">Direction</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handleChange}
                  label="Animation type"
                  fullWidth={true}
                  minWidth={"180px"}
                >
                  {directions.map((direction) => (
                    <MenuItem value={direction}>{direction}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="1">Fill Mode</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handleChange}
                  label="Animation type"
                >
                  {fullModes.map((fullMode) => (
                    <MenuItem value={fullMode}>{fullMode}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </section>
          <section className=" w-1/2  bg-black">
            <h2 className=" bg-blue-500 p-2 text-white">Preview</h2>
            <div className=" flex py-20 justify-center p-5">
              <div
                ref={animatedDivRef}
                className=" w-24 h-24 border bg-white "
                style={{
                  animation: `${animation} 2s ease 0ms 1 normal forwards`,
                }}
              ></div>
            </div>
            <h2 className=" bg-blue-500 p-2 text-white">
              Copy this to the element you want to animate.
            </h2>
            <pre className=" p-2">
              <code>{`animation: myAnim 2s ease 0s 1 normal forwards;`}</code>
            </pre>
            <h2 className=" bg-blue-500 p-2 text-white">
              Copy this after the above selector.
            </h2>
            <pre className=" p-2 overflow-auto max-h-56">
              <code>{keyframe}</code>
            </pre>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CssAnimationGenerator;

const animtionOptions = [
  "Attention",
  "Background",
  "Basic",
  "Entrance",
  "Exit",
];
const animationType = [
  "Blink 1",
  "Blink 2",
  "Bounce Bottom",
  "Bounce Left",
  "Bounce Right",
  "Bounce Top",
  "Jello Horizontal",
  "Jello Vertical",
  "Pulse Heartbeat",
  "Pulse Regular",
  "Pulse Ping",
  "Shake Horizontal",
  "Shake Vertical",
  "Shake Rotate",
  "Shake Bottom",
  "Shake Left",
  "Shake Right",
  "Shake Top",
  "Vibrate 1",
  "Vibrate 2",
  "Vibrate 3",
  "Wobble Bottom",
  "Wobble Left",
  "Wobble Right",
  "Wobble Top",
];
const timingFunction = [
  "linear",
  "ease",
  "easeIn",
  "easeOut",
  "easeInOut",
  "easeInQuad",
  "easeInCubic",
  "easeInQuart",
  "easeInQuint",
  "easeInSine",
  "easeInExpo",
  "easeInCirc",
  "easeInBack",
  "easeOutQuad",
  "easeOutCubic",
  "easeOutQuart",
  "easeOutQuint",
  "easeOutSine",
  "easeOutExpo",
  "easeOutCirc",
  "easeOutBack",
  "easeInOutQuad",
  "easeInOutCubic",
  "easeInOutQuart",
  "easeInOutQuint",
  "easeInOutSine",
  "easeInOutExpo",
  "easeInOutCirc",
  "easeInOutBack",
];
const directions = ["normal", "reverse", "alternate", "alternate-reverse"];
const fullModes = ["none", "forwards", "backwards", "both"];