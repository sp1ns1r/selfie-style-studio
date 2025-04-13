
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Users } from "lucide-react";

interface UserInfoFormProps {
  onSubmit: (formData: { name: string; gender: string }) => void;
}

export function UserInfoForm({ onSubmit }: UserInfoFormProps) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, gender });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <div className="absolute left-3 top-[38px] text-purple-400">
          <User className="h-5 w-5" />
        </div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pl-10 bg-white border-gray-200 focus:border-studio-purple focus:ring-studio-purple/20"
          placeholder="Your name"
        />
      </div>
      
      <div className="relative">
        <div className="absolute left-3 top-[38px] text-purple-400">
          <Users className="h-5 w-5" />
        </div>
        <Label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-1 block">
          Gender
        </Label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full pl-10 py-2 rounded-md border border-gray-200 bg-white focus:border-studio-purple focus:ring-2 focus:ring-studio-purple/20 focus:outline-none"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="other">Prefer not to say</option>
        </select>
      </div>
    </form>
  );
}
