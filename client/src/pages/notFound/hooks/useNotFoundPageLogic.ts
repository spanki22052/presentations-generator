import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useNotFoundPageLogic() {
  const navigate = useNavigate();

  const handleReturnToDashboard = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleContactSupport = useCallback(() => {
    // TODO: Navigate to support page or open support modal
    console.log("Contact support clicked");
  }, []);

  const handleNewDeck = useCallback(() => {
    // TODO: Navigate to create new deck page
    console.log("New deck clicked");
  }, []);

  const handleMyLibrary = useCallback(() => {
    // TODO: Navigate to library page
    console.log("My library clicked");
  }, []);

  const handleHelpCenter = useCallback(() => {
    // TODO: Navigate to help center page
    console.log("Help center clicked");
  }, []);

  return {
    handleReturnToDashboard,
    handleContactSupport,
    handleNewDeck,
    handleMyLibrary,
    handleHelpCenter,
  };
}

