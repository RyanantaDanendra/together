<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'attendence',
        'allergy'
    ];

    public function user() {
        return $this->BelongsTo(User::class, 'id_user');
    }
}
