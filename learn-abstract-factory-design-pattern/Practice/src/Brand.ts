import Brand from "./interfeces/IBrand";

class BrandApple implements Brand
{
    public name: string = 'Apple';

    public description: string = "Apple Inc. adalah perusahaan teknologi multinasional yang berpusat di Cupertino, California, yang merancang, mengembangkan, dan menjual barang elektronik konsumen, perangkat lunak komputer, dan layanan daring"

    public yearFounded: number = 1976;

    getName():string
    {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getYearFounded(): number {
        return this.yearFounded;
    }
}

class BrandSamsung implements Brand
{
    public name: string = 'Samsung';

    public description: string = "The Samsung Group is a South Korean multinational manufacturing conglomerate headquartered in Samsung Town, Seoul, South Korea."

    public yearFounded: number = 1969;

    getName():string
    {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getYearFounded(): number {
        return this.yearFounded;
    }
}

export { BrandApple, BrandSamsung }