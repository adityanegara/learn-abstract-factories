import { Phone, Tablet, Laptop } from "./Device";
import { BrandSamsung, BrandApple } from "./Brand";
import SmartDeviceFactory from "./interfeces/ISmartDeviceFactory";
import Device from "./interfeces/iDevice";
import Brand from "./interfeces/IBrand";

class SamsungGalaxyS22 implements SmartDeviceFactory
{
    createDevice(): Device
    {
        return new Phone;
    }

    createBrand(): Brand
    {
        return new BrandSamsung;    
    }

}


class IPadPro implements SmartDeviceFactory
{
    createDevice(): Device
    {
        return new Tablet;
    }

    createBrand(): Brand
    {
        return new BrandApple;    
    }

}

class Macbook implements SmartDeviceFactory
{
    createDevice(): Device
    {
        return new Laptop;
    }

    createBrand(): Brand
    {
        return new BrandApple;    
    }
}

export { SamsungGalaxyS22, IPadPro, Macbook } 