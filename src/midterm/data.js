import blubImg from "./images/bulb.png";
import airConditioningImg from "./images/air_conditioning.png";
import cameraImg from "./images/camera.png";
import doorHandleImg from "./images/door_handle.png";
import doorbellImg from "./images/doorbell.png";
import dropImg from "./images/drop.png";
import ventilationImg from "./images/ventilation.png";
import tvImg from "./images/tv.png";
import routerImg from "./images/router.png";
import plugImg from "./images/plug.png";
import cleaningRobotImg from "./images/cleaning_robot.png";
import washerImg from "./images/washer.png";
import garageImg from "./images/garage.png";
import thermostatImg from "./images/thermostat.png";
import loudspeakersImg from "./images/loudspeakers.png";

const data = [
  {
    // 設備 ID
    id: 1,
    // 設備名稱
    name: "電燈",
    // 設備圖示
    icon: blubImg,
    // 設備開關狀態
    isOpened: true,
  },
  {
    id: 2,
    name: "冷氣機",
    icon: airConditioningImg,
    isOpened: false,
  },
  {
    id: 3,
    name: "攝影機",
    icon: cameraImg,
    isOpened: true,
  },
  {
    id: 4,
    name: "大門門鎖",
    icon: doorHandleImg,
    isOpened: true,
  },
  {
    id: 5,
    name: "門鈴",
    icon: doorbellImg,
    isOpened: true,
  },
  {
    id: 6,
    name: "除濕機",
    icon: dropImg,
    isOpened: true,
  },
  {
    id: 7,
    name: "電風扇",
    icon: ventilationImg,
    isOpened: true,
  },
  {
    id: 8,
    name: "電視",
    icon: tvImg,
    isOpened: true,
  },
  {
    id: 9,
    name: "WiFi 機",
    icon: routerImg,
    isOpened: true,
  },
  {
    id: 10,
    name: "插座",
    icon: plugImg,
    isOpened: true,
  },
  {
    id: 11,
    name: "掃地機器人",
    icon: cleaningRobotImg,
    isOpened: true,
  },
  {
    id: 12,
    name: "洗衣機",
    icon: washerImg,
    isOpened: true,
  },
  {
    id: 13,
    name: "車庫捲門",
    icon: garageImg,
    isOpened: true,
  },
  {
    id: 14,
    name: "自動恆溫器",
    icon: thermostatImg,
    isOpened: true,
  },
  {
    id: 15,
    name: "音響",
    icon: loudspeakersImg,
    isOpened: true,
  },
];

export default data;
