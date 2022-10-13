import Brand from "./interfeces/IBrand";
import Device from "./interfeces/iDevice";
import SmartDeviceFactory from "./interfeces/ISmartDeviceFactory";

class SmartDevice
{
    private _brand: Brand;
    private _device: Device;

    constructor(smartDeviceFactory: SmartDeviceFactory)
    {
        this._brand = smartDeviceFactory.createBrand();
        this._device = smartDeviceFactory.createDevice();
    }

    testingFunctionalities():void
    {
        console.log(this._brand.getName());
        console.log(this._brand.getDescription());
        console.log(this._brand.getYearFounded());
        this._device.bootUp();
        this._device.takingPicture();
        this._device.shutDown();
    }
}

export default SmartDevice;