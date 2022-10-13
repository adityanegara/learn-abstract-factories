export default interface Brand{
    name: string,
    description: string,
    yearFounded: number,
    getName():string;
    getDescription():string;
    getYearFounded():number;
}