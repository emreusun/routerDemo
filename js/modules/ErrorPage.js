export default {
    template: `<h1>That page doesn't exist!</h1>`,

    created() {
        console.log('hit error page');

        // redirect back to a safe route
        setTimeout(() => {
            this.$router.push({ name: 'home' });
    }, 2500); // wait 2.5 seconds before redirecting
    }
}