import { useQuery } from "@tanstack/react-query";
import { navLinkApi } from "../../services/navLinkApi";

export function useNavLink() {
  const { data, isLoading } = useQuery({
    queryFn: navLinkApi,
    queryKey: ["navLink"],
  });

  return { data, isLoading };
}
