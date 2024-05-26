import { useQuery } from "@tanstack/react-query";
import { bannerApi } from "../../services/bannerApi";

export function useBanner() {
  const { data, isLoading } = useQuery({
    queryFn: bannerApi,
    queryKey: ["banner"],
  });

  return { data, isLoading };
}
