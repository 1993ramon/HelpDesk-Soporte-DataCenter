<?php

class Ticket {
    private $id;
    private $descripcion;
    private $categoria;
    private $prioridad;
    private $estado;

    public function __construct($id, $descripcion, $categoria, $prioridad) {
        $this->id = $id;
        $this->descripcion = $descripcion;
        $this->categoria = $categoria;
        $this->prioridad = $prioridad;
        $this->estado = "Abierto";
    }

    public function actualizarEstado($nuevoEstado) {
        $this->estado = $nuevoEstado;
    }

    public function obtenerResumen() {
        return "Ticket #" . $this->id . " - " . $this->categoria . " - " . $this->estado;
    }
}

?>
