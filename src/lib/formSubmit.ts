export const formSubmit = async (form: HTMLFormElement): Promise<void> => {
    form.addEventListener("submit", async (e: Event) => {
        e.preventDefault();

        const formData = new FormData(form);
        const jsonData = JSON.stringify(Object.fromEntries(formData));

        try {
            const response = await fetch(form.action, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonData,
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message || "An error occurred");
            }

            form.reset();

            if (responseData.redirect) {
                sessionStorage.setItem(
                    "formSubmitSuccessMessage",
                    responseData.message || "Submission successful"
                );
                window.location.href = responseData.redirect;
            } else {
                (window as any).showToast(
                    responseData.message || "Submission successful",
                    "success"
                );
            }
        } catch (error) {
            // console.error("Form submission error:", error);

            (window as any).showToast(
                error instanceof Error
                    ? error.message
                    : "An unexpected error occurred",
                "error"
            );
        }
    });
};
