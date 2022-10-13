import Brand from "./IBrand";
import Device from "./iDevice";

export default interface SmartDeviceFactory
{
    createDevice():Device,
    createBrand():Brand,
}