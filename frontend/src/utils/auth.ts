export const checkToken = async () => {
    const token = localStorage.getItem('auth-token');

    if (!token) {
        return false;
    }

    try {
        const response = await fetch('https://frozen-eliminate-cheap-video.trycloudflare.com/validate-token', {
            method: 'GET',
            headers: {
                'Authorization': `${token}`
            }
        });

        if (!response.ok) {
            localStorage.removeItem('auth-token');
            return false;
        }
    } catch (error) {
        console.error("Error validating token:", error);
        return false;
    }

    return true;
};
