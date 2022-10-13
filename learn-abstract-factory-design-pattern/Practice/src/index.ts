import { SamsungGalaxyS22, IPadPro, Macbook } from "./SmartDeviceFactory";
import SmartDevice from "./SmartDevice";

const samsungGalaxyA22 = new SmartDevice(new SamsungGalaxyS22());
const ipadPro = new SmartDevice(new IPadPro());
const macbook = new SmartDevice(new Macbook());

samsungGalaxyA22.testingFunctionalities();
ipadPro.testingFunctionalities();
macbook.testingFunctionalities();