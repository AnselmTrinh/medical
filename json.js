const data = {
  tables: [
    {
      table_name: "medecin",
      columns: [
        {
          medecin_id: 1,
          nom: "Dupont",
          prenom: "Jean",
          email: "jean.dupont@example.com",
          mot_de_passe:
            "$2a$12$S1NZlLSE6Op.5lDbJ.F0VuueuV9hWV/KidxHwNlN5MUttj6h1YlEy",
        },
      ],
    },
    {
      table_name: "rendezvous",
      columns: [
        {
          rendezvous_id: 1,
          medecin_id: 1,
          patient: "Elias Dupont",
          date_et_heure: "2023-10-10T09:00:00",
          motif: "Mal de gorge",
          duree: 30,
        },
        {
          rendezvous_id: 2,
          medecin_id: 1,
          patient: "Bob Gerard",
          date_et_heure: "2023-10-11T14:30:00",
          motif: "Examen de routine",
          duree: 45,
        },
        {
          rendezvous_id: 3,
          medecin_id: 2,
          patient: "Eva Martin",
          date_et_heure: "2023-10-12T11:15:00",
          motif: "Suivi médical",
          duree: 30,
        },
        {
          rendezvous_id: 4,
          medecin_id: 2,
          patient: "Eva Martin",
          date_et_heure: "2023-10-13T11:45:00",
          motif: "Suivi médical",
          duree: 30,
        },
      ],
    },
  ],
};
