# 📦 Master ExtJS Data Store

![ExtJS](https://img.shields.io/badge/Ext%20JS-7.7.0-blue?logo=sencha)
![License](https://img.shields.io/github/license/FelipeBuen0/master-extjs-data-store)
![Status](https://img.shields.io/badge/status-in%20development-yellow)

A modern architecture for building clean, maintainable, and efficient Ext JS 7.7.0 applications — with a full focus on **data flow**, **Stores**, and the **MVVM** pattern.

> Designed for developers who want to deeply understand how data travels through an Ext JS app — from the backend to the UI — with real use cases like dashboards, filtering, pagination, and REST integration.

---

## 🚀 Features

- ✅ Clean MVVM structure (Model, Store, Proxy, ViewModel, ViewController)
- 🔗 Two-way binding between UI and data via ViewModel
- 🌐 REST Proxy with customizable query params (pagination, filters, sort)
- 📊 Grid with paging toolbar and remote filtering/sorting
- ⚠️ Error handling and proxy events (`load`, `exception`, etc.)
- 🧩 Base prepared for integration with Python-based microservices (future)
- 🧠 Perfect for dashboard-style admin panels

---

## 📁 Project Structure

```text
app/
├── app.js               # Application entry point
├── model/
│   └── User.js          # Data model with fields and validators
├── store/
│   └── Users.js         # Store using Ajax proxy with pagination/sorting
└── view/
    └── main/
        ├── Main.js      # Main panel with grid and toolbar
        ├── MainModel.js # ViewModel with bound store
        └── MainController.js # (optional) ViewController for UI logic
index.html               # HTML bootstrap file loading ExtJS
```

---

## 📦 Requirements

- [Sencha Ext JS 7.7.0](https://docs.sencha.com/extjs/7.7.0/)
- Web server (can be as simple as `http-server`, Live Server, etc.)
- (Optional) REST API backend responding to `/api/users`

---

## 🛠️ Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/FelipeBuen0/master-extjs-data-store.git
   cd master-extjs-data-store
   ```

2. Open `index.html` in your browser (served via local web server).

3. If needed, point the proxy URL in `store/Users.js` to a real or mock backend:

   ```js
   proxy: {
     type: 'ajax',
     url: '/api/users', // <-- change this if needed
     ...
   }
   ```

4. (Optional) Connect to your Python microservice later for real-time data.

---

## 🧪 Roadmap Ideas

- [ ] Custom REST proxy with flexible param mapping (`pageNumber`, `pageSize`, `sortBy`, etc.)
- [ ] Live filters with debounced input
- [ ] Modal forms for Create/Update/Delete records
- [ ] Grid row selection with detail panel
- [ ] BufferedStore support for huge datasets
- [ ] Real backend integration (Flask/FastAPI)

---

## 📚 Resources

- [Ext JS 7.7.0 Documentation](https://docs.sencha.com/extjs/7.7.0/)
- [MVVM Architecture in Ext JS](https://docs.sencha.com/extjs/7.7.0/classic/Ext.app.ViewModel.html)
- [Data Package: Store, Model, Proxy](https://docs.sencha.com/extjs/7.7.0/classic/Ext.data.Store.html)

---

## 📝 License

This project is open-sourced under the MIT License.
