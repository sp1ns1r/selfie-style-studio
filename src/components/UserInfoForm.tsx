
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
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
  
  const handleGenderChange = (value: string) => {
    setGender(value);
    onSubmit({ name, gender: value });
  };
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    onSubmit({ name: e.target.value, gender });
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
          onChange={handleNameChange}
          className="pl-10 bg-white border-gray-200 focus:border-studio-purple focus:ring-studio-purple/20"
          placeholder="Your name"
        />
      </div>
      
      <div className="space-y-1.5">
        <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
          Gender
        </Label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 z-10">
            <Users className="h-5 w-5" />
          </div>
          <Select value={gender} onValueChange={handleGenderChange}>
            <SelectTrigger id="gender" className="pl-10 bg-white border-gray-200 focus:border-studio-purple focus:ring-studio-purple/20">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="other">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  );
}
