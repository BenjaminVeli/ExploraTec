
<!-- Entorno virtual -->
python -m venv env
.\env\Scripts\activate

<!-- Back end -->
cd backend
pip install -r requirements.txt
pip install mysqlclient
python manage.py makemigrations
python manage.py migrate
python manage.py runserver


<!-- Front end -->
cd frontend
npm install vite --save-dev
npm install axios react-router-dom jwt-decode
npm install react-hook-form
npm install @hookform/resolvers zod
npm run dev


