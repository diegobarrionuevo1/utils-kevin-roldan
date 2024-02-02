export async function uploadFileToDirectus(buffer, mimeType, fileName) {
    try {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", process.env.DIRECTUS_BOT);

        // Crear un objeto FormData
        let formData = new FormData();
        
        // Convertir buffer a Blob y agregar al formulario
        const blob = new Blob([buffer], { type: mimeType });
        formData.append("file", blob, fileName);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        };

        let response = await fetch("https://mio-casino-negro-1-directus.admin.hydracasino.tech/files", requestOptions);
        if (!response.ok) {
            // Mejora en la captura de detalles del error
            const errorBody = await response.text();
            console.error('Error Response:', errorBody);
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorBody}`);
        }

        let result = await response.json();
        console.log(result);
        return result.data.id;

    } catch (error) {
        console.error('Error uploading file to Directus:', error);
        throw error; // Re-throw the error to allow further handling up the chain
    }
}
