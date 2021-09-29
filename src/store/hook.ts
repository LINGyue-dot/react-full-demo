import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from ".";

export const useAppDispatch = () => useDispatch<RootDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector