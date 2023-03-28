export const getStarShip = async () => {

    try {
    
        const response = await fetch(
            `https://swapi.dev/api/starships/?format=json
            `
          );
        const data = await response.json();

        return data;

    }
    catch (error) {
        console.error(error);
    }

};

