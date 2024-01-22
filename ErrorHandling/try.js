try {
    // code that may throw an error
    throw new Error("An error");
} catch (error) {
    // code to handle error
    console.error(error.message);
} finally {
    // code that will run regardless of whether there was an error
    console.log("Cleanup code");
}