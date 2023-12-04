import { Loader } from "@shared/ui/Loader";
import { useLoading } from "@shared/lib/hooks/useLoader";

// Pages
import { MainScreen } from "@widgets/screens/Home/MainScreen/ui";
import { AboutScreen } from "@widgets/screens/Home/AboutScreen/ui";
import { CatalogueScreen } from "@widgets/screens/Home/CatalogueScreen/ui";
import { FormScreen } from "@widgets/screens/Home/FormScreen/ui";

export const HomePage = () => {
  const isLoading = useLoading(1200);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <MainScreen />
      <AboutScreen />
      <CatalogueScreen />
      <FormScreen />
    </>
  );
};
