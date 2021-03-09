export interface Tank {
    id: number;
    name: string;
    materialDescription: string;
    batchNo: string;
    batchSize: string;
    Client: string;
    deliveryDate: string;
    startDate: string;
    currentStatus: currentStatus;
    semaphore: semaphore;
  }

  enum currentStatus{
      Cargando = "Cargando",
      EC = "Entonado/Calidad",
      porEnvasar = "Por envasar",
      Envasando = "Envasando"
  }

  enum semaphore{
      red,
      yellow,
      green,
      purple
  }