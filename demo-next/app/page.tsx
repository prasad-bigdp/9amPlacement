import Link from "next/link";
export default function Home() {
  // let a: number[] = [ 50, 78, 99 ];
  // let c:[number,string]=[34,"khyyu"]
  // let b: number | string = "prasad";
  // interface Obj{
  //   username: string,
  //   age: number,
  //   email:string
  // }
  // let p: Obj = {
  //   username:'',
  //   age: 0,
  //   email:''
  // }
  // enum days{
  //   sunday,
  //   monday,
  //   tuesday
  // }
  // function sum(a:number, b:number):void
  // {
  // }
  return (
    <>
      <p className=" text-lg">HEllo World </p>
      <Link href='/about'>Goto About</Link>
    </>
  );
}
