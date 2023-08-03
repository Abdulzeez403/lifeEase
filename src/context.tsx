import React, { ComponentProps, FC } from "react";
import { AuthContextProvder } from "./module/auth/context";
import { ProfileContextProvider } from "./module/profile/context";

export const combineContext = (...components: FC[]): FC<any> => {
  return components.reduce(
    (AccumulatedComponents: any, CurrentComponent: any) => {
      return ({ children }: ComponentProps<FC<any>>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

const providers = [AuthContextProvder, ProfileContextProvider] as any;

export const AppContextProvider = combineContext(...providers);
