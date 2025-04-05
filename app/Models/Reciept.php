<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reciept extends Model
{
    use HasFactory;

    protected $fillable = [
        "id_user",
        "image"
    ];

    public function user() {
        return $this->BelongsTo(User::class);
    }
}
