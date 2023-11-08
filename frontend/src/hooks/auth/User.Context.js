const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}