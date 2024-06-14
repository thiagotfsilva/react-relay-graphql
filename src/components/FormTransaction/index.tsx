import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const FormTransaction = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className=" bg-zinc-500 w-[350px] h-[350px] border-2 p-4 flex flex-col justify-between">
        <CardHeader className="flex flex-col justify-between">
          <CardTitle className="mb-2">Transferência bancária</CardTitle>
          <CardDescription className="text-xs">
            Insira o usuário e valor da transação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4 w-full">
              <div className="flex flex-col">
                <div className="">
                  <Label htmlFor="user" className="mb-1 text-sm">
                    Usuário
                  </Label>
                </div>
                <Input
                  id="user"
                  placeholder="Usuário que receberá a transação"
                  className="w-full border p-2  bg-zinc-300"
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="value" className="mb-1 text-sm">
                  Valor
                </Label>
                <Input
                  id="value"
                  placeholder="Valor da transação"
                  className="w-full border p-2  bg-zinc-300"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className=" w-full  p-1 border bg-slate-500 rounded my-3">
            Enviar transação
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
