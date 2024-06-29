### EXPLORATEC - TOUR 360° DEL CAMPUS SEDE LIMA EN TECSUP

Tour 360° del Campus Sede Lima en Tecsup

### Crear entorno virtual :

```sh
python -m venv env
.\env\Scripts\activate
```

### Initialize Backend :

```sh
cd backend
pip install -r requirements.txt
pip install mysqlclient
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```


### Initialize Frontend :

```sh
cd frontend
npm install pannellum-react --legacy-peer-deps
npm install axios react-router-dom jwt-decode
npm install react-hook-form
npm install @hookform/resolvers zod
npm install --save chart.js react-chartjs-2
npm run dev
```


